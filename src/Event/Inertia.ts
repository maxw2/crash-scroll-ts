import { POS } from '../interface'

function inertia(element: any): [number, number] {
    let time = element._pos.upTime - element._pos.moveTime
    let x = element._pos.x + element._pos.disX
    let y = element._pos.y + element._pos.disY

    if (time > 1) return [x, y]

    viewInertiaCss(element, x, y, time)

    return [x, y]

}



function viewInertiaCss(element: any, x: number, y: number, time: number) {
    let scrollX = element.op.scrollX
    let content = element.dom.content
    let _time = Math.round(time * 10)
    let _x = x
    let _y = y

    if (!scrollX) {
        content.style.transform = `translateY(${y}px) translateZ(0)`
        content.style.transition = `transform ${500}ms ease 0s`
    }


}


export { inertia }