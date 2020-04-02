import { OPTIONS, POS, ON } from './interface'

let _default: OPTIONS = {
    scrollX: false,
    inertial: true,
    swiper: false,
    resistance: true,
    direction: false
}

let pos: POS = {
    downX: null,
    downY: null,
    _downX: null,
    _downY: null,
    moveX: null,
    moveY: null,
    distanceY: null,
    upX: null,
    upY: null,
    disX: null,
    disY: null,
    moveTime: null,
    upTime: null,
    startTime: null,
    runTime: null,
    endTime: null,
    cancelTime: null,
    isMove: null,
    isDown: null,
    isMobile: null,
    x: 0,
    y: 0,
    btn: 0
}

let on: ON = {
    scroll: [],
    mousedown: [],
    mousemove: [],
    mouseup: [],
    swiper: [],
    time: 0
}

export { _default, pos, on }
