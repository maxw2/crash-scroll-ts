import { isMobile } from './GetPos'
import { onEventDown, onEventMove, onEventUp } from './TouchEvent'
import { onTransitionStart, onTransitionEnd, onTransitionCancel } from './TransitionEvent'

export function initEvent(CScroll: object) {
    addEventListener(CScroll)
}

/**
 * @name 事件代理
 * @param element 
 */
function addEventListener(CScroll: object) {
    const that: any = CScroll
    that.isMobile = isMobile()
    
    const typeDown = that.isMobile ? 'touchstart' : 'mousedown'
    const typeMove = that.isMobile ? 'touchmove' : 'mousemove'
    const typeUp = that.isMobile ? 'touchend' : 'mouseup'

    that.$el.addEventListener(typeDown, onEventDown.bind(that))
    that.$el.addEventListener(typeMove, onEventMove.bind(that))
    that.$el.addEventListener(typeUp, onEventUp.bind(that))

    that.$el.addEventListener('transitionstart', onTransitionStart.bind(that))
    that.$el.addEventListener('transitionend', onTransitionEnd.bind(that))
    that.$el.addEventListener('transitioncancel', onTransitionCancel.bind(that))

}

/**
 * 
 */
function removeEventListener(element: any) {

}





