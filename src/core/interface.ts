interface OPTIONS {
    scrollX: boolean,
    inertial: boolean,
    swiper: boolean,
    resistance: boolean,
    direction: boolean
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
    bottom: number,
    swiper?: {
        children: []
    }
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
    isMove: boolean,
    isDown: boolean,
    isMobile: boolean,
    x: number,
    y: number,
    btn: number
}

interface ON {
    scroll: { fn: object, el: object }[],
    mousedown: { fn: object, el: object }[],
    mousemove: { fn: object, el: object }[],
    mouseup: { fn: object, el: object }[],
    swiper: { fn: object, el: object }[],
    time: number
}


export { DOM, OPTIONS, POS, ON }
