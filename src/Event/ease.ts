import { viewPos } from './View'
import { OPTIONS, DOM, POS } from '../interface'

/**
 * @name 回弹
 * @param {object} element
 * @return {Array} x,y
 */
function easeCss(options: OPTIONS, dom: DOM, x: number, y: number): [number, number] {
    let scrollX = options.scrollX
    let content: any = dom.content
    let left = dom.left
    let right = dom.right
    let top = dom.top
    let bottom = dom.bottom
    let _x = x
    let _y = y



    if (!scrollX) {
        if (y > top) {
            viewPos(options, dom, null, top)
            return [x, top]
        } else if (y < bottom) {
            viewPos(options, dom, null, bottom)
            return [x, bottom]
        }
    }

    return [x, y]

}



export { easeCss }
