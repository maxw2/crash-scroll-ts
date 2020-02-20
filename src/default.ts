import { OPTIONS, POS, ON } from './interface'

let _default: OPTIONS = {
    scrollX: false,

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
    x: null,
    y: null
}

let on: ON = {
    scroll: [],
    mousedown:[],
    mousemove:[],
    mouseup:[]
}

export { _default, pos, on }
