
interface DOM {
    readonly el: object,
    content: object,
    el_w: number,
    el_h: number,
    content_w: number,
    content_h: number,
    left: number,
    right: number,
    top: number,
    bottom: number
}

interface OPTIONS {
    scrollX?: false



}

interface POS {
    downX: number,
    downY: number,
    moveX: number,
    moveY: number,
    disX: number,
    disY: number,
    x: number,
    y: number,
}


export { DOM, OPTIONS, POS }
