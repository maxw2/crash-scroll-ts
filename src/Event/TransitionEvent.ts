import _ from '../utils'
import { DOM } from '../interface'
import { setPos } from './GetPos'
import { viewPos } from './View'

function onTransitionStart(ev: any) {
    this.$pos.startTime = ev.timeStamp
    this.$pos.duration = _.getDuration(this.dom.content, 'transition-duration')


}

function onTransitionMove(ev: any) {

}

function onTransitionEnd(ev: any) {
    this.$pos.endTime = ev.timeStamp
    let matrix = _.getMatrix(this.dom.content, 'transform')


    let x = matrix[4]
    let y = matrix[5];

    [this.$pos.x, this.$pos.y] = setPos(x, y)

}

function onTransitionCancel(ev: any) {
    let time = Math.round(ev.timeStamp - this.$pos.startTime) / this.$pos.duration;
    let x = this.$pos.x * time;
    let y = this.$pos.y * time;


    [this.$pos.x, this.$pos.y] = setPos(x, y)
    viewPos(this.op, this.dom, this.$pos.x, this.$pos.y)

}



function stopTransition(dom: DOM) {
    let content: any = dom.content

    content.style.transition = ''

}

export {
    onTransitionStart,
    onTransitionMove,
    onTransitionEnd,
    onTransitionCancel,
    stopTransition
}