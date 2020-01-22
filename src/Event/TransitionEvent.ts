import _ from '../utils'
import { DOM } from '../interface'
import { setPos } from './GetPos'

function onTransitionStart(ev: any) {

    console.log(ev.timeStamp)
}

function onTransitionMove(ev: any) {

}

function onTransitionEnd(ev: any) {
    console.dir(this)
    let style = _.getStyle(this.dom.content, 'transform')

    let matrix = _.getMatrix(style)
    let x = matrix[4]
    let y = matrix[5];
    [this.$pos.x, this.$pos.y] = setPos(x, y)
    console.log(this.$pos.x, this.$pos.y)
}

function onTransitionCancel(ev: any) {
    this.$pos.cancelTime = ev.timeStamp / 1000
    let style = _.getStyle(this.dom.content, 'transform')
    let matrix = _.getMatrix(style)
    let x = matrix[4]
    let y = matrix[5]
    console.log('cancel')
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