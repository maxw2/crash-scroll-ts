import { POS, OPTIONS, DOM } from "../interface"

/**
 * @name 获取坐标
 * @param type 
 * @param ev 
 */
function getClient(type: string, ev: any, pos?: POS): [number, number, number, number?, number?] {
    let clientX: number = 0
    let clientY: number = 0
    let time: number = 0
    let _isMobile = isMobile()
    let disX: number = 0
    let disY: number = 0

    switch (type) {
        case 'down':
            clientX = _isMobile ? ev.touches[0].clientX : ev.clientX
            clientY = _isMobile ? ev.touches[0].clientY : ev.clientY
            time = ev.timeStamp
            break;
        case 'move':
            clientX = _isMobile ? ev.touches[0].clientX : ev.clientX
            clientY = _isMobile ? ev.touches[0].clientY : ev.clientY

            // disX = clientX - pos.moveX
            if (pos.moveY) {
                disY = clientY - pos.moveY
                console.log('XXXXXX')
            } else {
                console.log('!!!!')
                console.log(clientY, pos.downY)
                disY = clientY - pos.downY
            }

            time = ev.timeStamp
            // console.log('disY' + disY)
            break;
        case 'up':
            clientX = 0
            clientY = 0
            time = ev.timeStamp
            break;
        default:
            break;
    }

    return [clientX, clientY, time, disX, disY]
}

/**
 * @name 坐标参数
 * @param pos 
 * @returns {Array} x与y轴坐标
 */
function getPos(x: number, y: number, disX: number, disY: number): [number, number] {
    let _x = x + disX
    let _y = y + disY
    return [_x, _y]
}

function setPos(x: number, y: number): [number, number] {
    let _x = x
    let _y = y
    return [_x, _y]
}








/**
 * @name 阻力片
 * @param pos
 * @return {Array} 
 */
function resistance(options: OPTIONS, dom: DOM, x: number, y: number): [number, number] {
    let scrollX = options.scrollX
    let left = dom.left
    let right = dom.right
    let top = dom.top
    let bottom = dom.bottom
    let _x = x
    let _y = y

    if (scrollX) {
        if (_x > left || _x < right) _x *= 0.4

    }
    else if (!scrollX) {
        if (_y > top || _y < bottom) _y *= 0.4

    }

    return [_x, _y]
}




/**
 * @name 检测设备端口
 * @return {Boolean} 
 */
function isMobile(): boolean {
    const ua = navigator.userAgent.toLocaleLowerCase()

    return /mobi/i.test(ua) ?
        true : false
}

export {
    getClient,
    getPos,
    setPos,
    resistance,
    isMobile
}