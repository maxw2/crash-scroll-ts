import { viewPos } from './View'
import { OPTIONS, DOM, POS } from '../interface'

/**
 * @name 回弹
 * @param {object} element
 * @return {Array} x,y
 */
function easeCss(options: OPTIONS, dom: DOM, x: number, y: number): [number, number] {
    let scrollX = options.scrollX
    let left = dom.left
    let right = dom.right
    let top = dom.top
    let bottom = dom.bottom



    if (!scrollX) {
        if (y > top) {
            viewPos(options, dom, null, top)
            return [x, top]
        } else if (y < bottom) {
            viewPos(options, dom, null, bottom)
            return [x, bottom]
        }
    } else if (scrollX) {
        if (x < left) {
            viewPos(options, dom, left, null)
            return [left, y]
        } else if (x > right) {
            viewPos(options, dom, right, null)
            return [right, y]
        }
    }

    return [x, y]

}



export { easeCss }
