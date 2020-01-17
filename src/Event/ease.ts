import { viewPos, getPos } from './viewPos'

/**
 * @name 回弹
 * @param {object} element
 */
export function easa(element: any) {
    let scrollX = element.op.scrollX
    let left = element.dom.left
    let right = element.dom.right
    let top = element.dom.top
    let bottom = element.dom.bottom
    let x = element._pos.x + element._pos.disX
    let y = element._pos.y + element._pos.disY


    if (scrollX) {
        if (x > left || Math.abs(x) > right) {
            
        }
    } else {
        if (y > top || Math.abs(y) > bottom) {

        }
    }







}