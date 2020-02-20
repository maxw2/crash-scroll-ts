interface OPTIONS {
    scrollX?: false
}

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

interface POS {
    downX: number,
    downY: number,
    _downX: number,
    _downY: number,
    moveX: number,
    moveY: number,
    distanceY: number,
    upX: number,
    upY: number,
    disX: number,
    disY: number,
    moveTime: any,
    upTime: any,
    startTime: number,
    runTime: number,
    endTime: number,
    cancelTime: number,
    x: number,
    y: number,
}

interface ON {
    scroll: object[],
    mousedown: object[],
    mousemove: object[],
    mouseup: object[],
}


export { DOM, OPTIONS, POS, ON }
