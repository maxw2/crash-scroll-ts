import _ from '../utils'
import { DOM } from '../interface'
import { setPos } from './GetPos'
import { easeCss } from './Ease'

function onTransitionStart(ev: any) {
    this.$pos.transitionMove = true
    console.log('tranistionStart')


    // on
    if (this.$on.scroll) {
        this.time = setInterval(() => {
            this.$on.scroll.forEach((fn: any) => {
                // fn(this.$pos)
                let matrix = _.getMatrix(this.$dom.content, 'transform')
                let x = matrix[4];
                let y = matrix[5];
                fn({ x: x, y: y })
            })
        }, 50)
    }
}


function onTransitionEnd(ev: any) {
    this.$pos.transitionMove = false
    console.log('tranistionEnd')

    let matrix = _.getMatrix(this.$dom.content, 'transform')

    let x = matrix[4];
    let y = matrix[5];

    if (this.$pos.inertial) {
        this.$pos.inertial = false
        easeCss(this.$op, this.$dom, x, y)
    }

    [this.$pos.x, this.$pos.y] = setPos(x, y)


    //

    window.clearInterval(this.time)

    if (this.$on.scroll) {
        this.$on.scroll.forEach((fn: any) => {
            fn({ x: this.$pos.x, y: this.$pos.y })
        })
    }


}

function onTransitionCancel(ev: any) {
    console.log('tranistionCancel')
    window.clearInterval(this.time)

    if (this.$on.scroll) {
        this.$on.scroll.forEach((fn: any) => {
            let matrix = _.getMatrix(this.$dom.content, 'transform')
            let x = matrix[4];
            let y = matrix[5];
            fn({ x: x, y: y })
        })
    }



}



function stopTransition(dom: DOM) {
    let content: any = dom.content

    content.style.transitionDuration = '0s'

}

export {
    onTransitionStart,
    // onTransitionRun,
    onTransitionEnd,
    onTransitionCancel,
    stopTransition
}