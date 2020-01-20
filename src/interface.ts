
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
    upX:number,
    upY:number,
    disX: number,
    disY: number,
    moveTime: any,
    upTime: any,
    startTime:number,
    runTime:number,
    endTime:number,
    cancelTime:number,
    x: number,
    y: number,
}


export { DOM, OPTIONS, POS }
