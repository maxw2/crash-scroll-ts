import { viewPos } from './View'
import { OPTIONS, DOM, POS } from '../interface'
import { resistance } from './GetPos'

/**
 * @name 惯性滑动
 * @param options 
 * @param dom 
 * @return {Boolean} 是否滑动 
 */
function InertialCss(options: OPTIONS, dom: DOM, pos: POS, time: number, num: number, isMove: boolean) {
    if (!options.inertial) return false
    if (time > 200) return false
    if (!isMove) return false
    let scrollX = options.scrollX
    let distance = scrollX ?
        pos.moveX - pos.downX : pos.moveY - pos.downY
    let speed = distance / time
    let content: any = dom.content
    let inertia = speed / num

    let x = inertia + pos.x
    let y = inertia + pos.y
    let _x = null
    let _y = null

    if (scrollX) {
        if (x > dom.left) {
            let disX = x - dom.left;
            [_x, _y] = resistance(options, dom, pos, disX, null)
            _x += dom.left
        } else if (x < dom.right) {
            let disX = x - dom.right;
            [_x, _y] = resistance(options, dom, pos, disX, null)
            _x += dom.right
        } else {
            _x = x
        }
    } else if (!scrollX) {
        if (y > dom.top) {
            let disY = y - dom.top;
            [_x, _y] = resistance(options, dom, pos, null, disY)
            _y += dom.top
        } else if (y < dom.bottom) {
            let disY = y - dom.bottom;
            [_x, _y] = resistance(options, dom, pos, null, disY)
            _y += dom.bottom
        } else {
            _y = y
        }
    }

    x = _x
    y = _y

    if (!scrollX) {
        if (y > dom.top || y < dom.bottom) content.style.transitionDuration = '150ms'
        viewPos(options, dom, null, y)
    } else if (scrollX) {
        if (x > dom.left || x < dom.right) content.style.transitionDuration = '150ms'
        viewPos(options, dom, x, null)
    }

    return true
}



export { InertialCss }