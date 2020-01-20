import { isMobile } from './GetPos'
import { onEventDown, onEventMove, onEventUp } from './TouchEvent'
import { onTransitionStart, onTransitionMove, onTransitionEnd, onTransitionCancel } from './TransitionEvent'

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

    element.addEventListener('transitionstart', onTransitionStart)
    element.addEventListener('transitionrun', onTransitionMove)
    element.addEventListener('transitionend', onTransitionEnd)
    element.addEventListener('transitioncancel', onTransitionCancel)

}

/**
 * 
 */
function removeEventListener(element: any) {

}





