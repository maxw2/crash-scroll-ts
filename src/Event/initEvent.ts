import { pos } from '../default'
import { getClient, getDis, getPos, viewPos, isMobile } from './viewPos'
import { easa } from "./ease"

export function initEvent(element: any) {
    addEventListener(element)
}

/**
 * @name 事件代理
 * @param element 
 */
function addEventListener(element: any) {
    element.isMobile = isMobile()

    const typeDown = element.isMobile ? 'touchstart' : 'mousedown'
    const typeMove = element.isMobile ? 'touchmove' : 'mousemove'
    const typeUp = element.isMobile ? 'touchend' : 'mouseup'

    element.addEventListener(typeDown, onEventDown)
    element.addEventListener(typeMove, onEventMove)
    element.addEventListener(typeUp, onEventUp)

}

/**
 * 
 */
function removeEventListener(element: any) {

}



function onEventDown(ev: any) {
    this.isDown = true
    if (!this._pos) this._pos = pos;

    [this._pos.downX, this._pos.downY] = getClient('down', ev)


}


function onEventMove(ev: any) {
    if (!this.isDown) return

    [this._pos.moveX, this._pos.moveY] = getClient('move', ev);

    // 距离
    // 三指
    [this._pos.disX, this._pos.disY] = getDis(this);
    
    
    // view移动
    viewPos(this)



}

function onEventUp(ev: any) {
    this.isDown = false;



    easa(this);

    [this._pos.x, this._pos.y] = getPos(this._pos)

}


