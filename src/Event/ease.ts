import { viewPos } from './View'

/**
 * @name 回弹
 * @param {object} element
 * @return {Array} x,y
 */
function ease(element: any): [number, number] {
    let scrollX = element.op.scrollX
    let left = element.dom.left
    let right = element.dom.right
    let top = element.dom.top
    let bottom = element.dom.bottom
    let x = element._pos.x
    let y = element._pos.y



    // scrollX
    if (scrollX) {
        if (x > left || Math.abs(x) > right) {
            element._pos.disX *= 0.01
            // viewPos(element)
        }
        if (Math.floor(x) === left) {
            x = left
            return [x, y]
        }
        if (Math.floor(x) === right) {
            x = right
            return [x, y]
        }


    }

    // scrollY 
    else if (!scrollY) {
        // 
        if (y > top || y < -bottom) {
            console.log(y)
            // 
            if (Math.floor(y) === top) {
                y = top
                console.log(x, y)
                return [x, y]
            } else if (Math.floor(y) === bottom) {
                y = bottom
                return [x, y]
            } else {
                element._pos.y *= 0.99

                // viewPos(element)
                return ease(element)
            }
        }

    }

    return [x, y]





}

function easeCss(element: any): [number, number] {
    let scrollX = element.op.scrollX
    let content = element.dom.content
    let left = element.dom.left
    let right = element.dom.right
    let top = element.dom.top
    let bottom = element.dom.bottom
    let x = element._pos.x
    let y = element._pos.y



    if (!scrollX) {
        if (y > top) {

            content.style.transition = `0.3s transform ease-out 0s`
            content.style.transform = `translateY(${top}px) translateZ(0px)`
            return [x, top]
        } else if (y < bottom) {

            content.style.transition = `0.3s transform ease-out 0s`
            content.style.transform = `translateY(${bottom}px) translateZ(0px)`
            return [x, bottom]
        }
    }

    return [x, y]

}

// export { ease, easeCss }
