"use strict";
exports.__esModule = true;
var View_1 = require("./View");
var GetPos_1 = require("./GetPos");
/**
 * @name 惯性滑动
 * @param options
 * @param dom
 * @return {Boolean}
 */
function InertialCss(options, dom, pos, time, num) {
    var _a, _b, _c, _d;
    if (time > 200)
        return false;
    var scrollX = options.scrollX;
    var distance = pos.moveY - pos._downY;
    var speed = distance / time;
    var content = dom.content;
    var inertia = speed / num;
    var x = inertia + pos.x;
    var y = inertia + pos.y;
    var _x = null;
    var _y = null;
    if (options.scrollX) {
        if (x > dom.left) {
            // let [_x, _y] = 
            var disX = x - dom.left;
            _a = GetPos_1.resistance(options, dom, pos, disX, null), _x = _a[0], _y = _a[1];
            _x += dom.left;
        }
        else if (x < dom.right) {
            var disX = x - dom.right;
            _b = GetPos_1.resistance(options, dom, pos, disX, null), _x = _b[0], _y = _b[1];
            _x += dom.right;
        }
        else {
            _x = x;
        }
    }
    else {
        if (y > dom.top) {
            // let [_x, _y] = 
            var disY = y - dom.top;
            _c = GetPos_1.resistance(options, dom, pos, null, disY), _x = _c[0], _y = _c[1];
            _y += dom.top;
        }
        else if (y < dom.bottom) {
            var disY = y - dom.bottom;
            _d = GetPos_1.resistance(options, dom, pos, null, disY), _x = _d[0], _y = _d[1];
            _y += dom.bottom;
        }
        else {
            _y = y;
        }
    }
    x = _x;
    y = _y;
    if (!scrollX) {
        if (y > dom.top || y < dom.bottom)
            content.style.transitionDuration = '150ms';
        View_1.viewPos(options, dom, null, y);
    }
    else {
        if (x > dom.left || x < dom.right)
            content.style.transitionDuration = '150ms';
        View_1.viewPos(options, dom, x, null);
    }
    return true;
}
exports.InertialCss = InertialCss;
