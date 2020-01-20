import { OPTIONS, DOM, POS } from '../interface'

function viewPos(options: OPTIONS, dom: DOM, x: number, y: number) {
    let scrollX = options.scrollX
    let content: any = dom.content

    if (scrollX) {
        content.style.transform = `translateX(${x}px) translateZ(0)`
    } else {
        content.style.transform = `translateY(${y}px) translateZ(0)`
    }


}


export { viewPos }