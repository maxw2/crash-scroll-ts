interface OPTIONS {
    scrollX: boolean,
    inertial: boolean,
    swiper: boolean,
    resistance: boolean,
    direction: boolean
}

interface SDOM {
    chilrenLen: number,
    children: {
        width: number,
        height: number,
        left: number,
        right: number,
        top: number,
        bottom: number
    }[]
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


export { SDOM, OPTIONS, POS, ON }