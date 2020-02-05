import _ from '../utils'
import { DOM } from '../interface'
import { setPos } from './GetPos'
import { easeCss } from './Ease'

function onTransitionStart(ev: any) {
    this.$pos.transitionMove = true
}

function onTransitionMove(ev: any) {
    console.log('tranistionMove')


}

function onTransitionEnd(ev: any) {
    this.$pos.transitionMove = false
    console.log('tranistionEnd')
    
    let matrix = _.getMatrix(this.dom.content, 'transform')

    let x = matrix[4];
    let y = matrix[5];

    if (this.$pos.inertial) {
        this.$pos.inertial = false
        easeCss(this.op, this.dom, x, y)
    }

    [this.$pos.x, this.$pos.y] = setPos(x, y)






}

function onTransitionCancel(ev: any) {
    console.log('tranistionCancel')
    // let time = Math.round(ev.timeStamp - this.$pos.startTime) / this.$pos.duration;
    // let x = this.$pos.x * time;
    // let y = this.$pos.y * time;


    // [this.$pos.x, this.$pos.y] = setPos(x, y)
    // viewPos(this.op, this.dom, this.$pos.x, this.$pos.y)

}



function stopTransition(dom: DOM) {
    let content: any = dom.content

    content.style.transitionDuration = '0s'

}

export {
    onTransitionStart,
    onTransitionMove,
    onTransitionEnd,
    onTransitionCancel,
    stopTransition
}