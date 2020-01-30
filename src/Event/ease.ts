import { viewPos } from './View'
import { OPTIONS, DOM, POS } from '../interface'

/**
 * @name 回弹
 * @param {object} element
 * @return {Array} x,y
 */
function easeCss(options: OPTIONS, dom: DOM, x: number, y: number): [number, number] {
    let scrollX = options.scrollX
    let content:any = dom.content
    let left = dom.left
    let right = dom.right
    let top = dom.top
    let bottom = dom.bottom
    let _x = x
    let _y = y



    if (!scrollX) {
        if (y > top) {

            content.style.transition = `300ms transform ease 0s`
            content.style.transform = `translateY(${top}px) translateZ(0px)`
            return [x, top]
        } else if (y < bottom) {

            content.style.transition = `300ms transform ease 0s`
            content.style.transform = `translateY(${bottom}px) translateZ(0px)`
            return [x, bottom]
        }
    }

    return [x, y]

}



export { easeCss }
