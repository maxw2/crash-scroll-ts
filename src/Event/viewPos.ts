import { POS } from "../interface"

/**
 * @name 获取坐标
 * @param type 
 * @param ev 
 */
function getClient(type: string, ev: any): [number, number] {
    let x: number = 0
    let y: number = 0
    let _isMobile = isMobile()


    switch (type) {
        case 'down':
            x = _isMobile ? ev.touches[0].clientX : ev.clientX
            y = _isMobile ? ev.touches[0].clientY : ev.clientY
            break;
        case 'move':
            x = _isMobile ? ev.touches[0].clientX : ev.clientX
            y = _isMobile ? ev.touches[0].clientY : ev.clientY
            break;

    }

    return [x, y]


}

/**
 * @name 移动距离
 * @param pos 
 * @returns {Array} 横纵项的移动距离
 */
function getDis(element: any): [number, number] {
    let pos = element._pos

    let x: number = 0
    let y: number = 0

    x = pos.moveX - pos.downX
    y = pos.moveY - pos.downY

    return [x, y] = resistance(element, x, y)
}
/**
 * @name 坐标参数
 * @param pos 
 * @returns {Array} x与y轴坐标
 */
function getPos(pos: POS): [number, number] {
    let x = pos.x + pos.disX
    let y = pos.y + pos.disY

    return [x, y]
}





/**
 * @name 阻力片
 * @param pos
 * @return {Array} 
 */
function resistance(element: any, x: number, y: number): [number, number] {
    let scrollX = element.op.scrollX
    let el_w = element.dom.el_w
    let el_h = element.dom.el_h
    let content_w = element.dom.content_w
    let content_h = element.dom.content_h
    let _x = x
    let _y = y

    if (scrollX) {
        if (_x > 0 || _x < content_w - el_w) _x *= 0.4

    } else {
        if (_y > 0 || _y < content_h - el_h) _y *= 0.4

    }

    return [_x, _y]
}



function viewPos(element: any) {
    let scrollX = element.op.scrollX
    let content = element.dom.content
    let pos = {
        disX: element._pos.disX,
        disY: element._pos.disY,
        x: element._pos.x,
        y: element._pos.y
    }

    if (scrollX) {
        content.style.transform = `translateX(${pos.x + pos.disX}px) translateZ(0)`
    } else {
        content.style.transform = `translateY(${pos.y + pos.disY}px) translateZ(0)`
    }


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
    getDis,
    getPos,
    viewPos,
    isMobile
}