"use strict";
exports.__esModule = true;
/**
 * @name 获取坐标
 * @param type
 * @param ev
 */
function getClient(type, ev, pos) {
    var clientX = 0;
    var clientY = 0;
    var time = 0;
    var _isMobile = isMobile();
    var disX = 0;
    var disY = 0;
    switch (type) {
        case 'down':
            clientX = _isMobile ? ev.touches[0].clientX : ev.clientX;
            clientY = _isMobile ? ev.touches[0].clientY : ev.clientY;
            time = ev.timeStamp;
            break;
        case 'move':
            clientX = _isMobile ? ev.touches[0].clientX : ev.clientX;
            clientY = _isMobile ? ev.touches[0].clientY : ev.clientY;
            // disX = clientX - pos.moveX
            if (pos.moveY) {
                disY = clientY - pos.moveY;
                console.log('XXXXXX');
            }
            else {
                console.log('!!!!');
                console.log(clientY, pos.downY);
                disY = clientY - pos.downY;
            }
            time = ev.timeStamp;
            // console.log('disY' + disY)
            break;
        case 'up':
            clientX = 0;
            clientY = 0;
            time = ev.timeStamp;
            break;
        default:
            break;
    }
    return [clientX, clientY, time, disX, disY];
}
exports.getClient = getClient;
/**
 * @name 坐标参数
 * @param pos
 * @returns {Array} x与y轴坐标
 */
function getPos(x, y, disX, disY) {
    var _x = x + disX;
    var _y = y + disY;
    return [_x, _y];
}
exports.getPos = getPos;
function setPos(x, y) {
    var _x = x;
    var _y = y;
    return [_x, _y];
}
exports.setPos = setPos;
/**
 * @name 阻力片
 * @param pos
 * @return {Array}
 */
function resistance(options, dom, pos, disX, disY, num) {
    var scrollX = options.scrollX;
    var left = dom.left;
    var right = dom.right;
    var top = dom.top;
    var bottom = dom.bottom;
    var posX = pos.x;
    var posY = pos.y;
    var x = disX;
    var y = disY;
    if (scrollX) {
        if (posX > left || posX < right)
            x *= 0.4;
    }
    else if (!scrollX) {
        if (posY > top || posY < bottom)
            y *= 0.4;
    }
    return [x, y];
}
exports.resistance = resistance;
/**
 * @name 检测设备端口
 * @return {Boolean}
 */
function isMobile() {
    var ua = navigator.userAgent.toLocaleLowerCase();
    return /mobi/i.test(ua) ?
        true : false;
}
exports.isMobile = isMobile;
