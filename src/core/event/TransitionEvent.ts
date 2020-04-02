import _ from '../../utils'
import { DOM } from '../interface'
import { setPos } from './GetPos'
import { easeCss } from './Ease'

function onTransitionStart(ev: any) {
    this.$pos.transitionMove = true
    // on
    if (this.$on.scroll) {
        this.$on.time = setInterval(() => {
            this.$on.scroll.forEach((val: any) => {
                // if (this.$el !== val.el) return
                let matrix = _.getMatrix(this.$dom.content, 'transform')
                let x = matrix[4];
                let y = matrix[5];
                [this.$pos.x, this.$pos.y] = setPos(x, y)
                val.fn.call(this, ev)
            })
        }, 50)
    }
}


function onTransitionEnd(ev: any) {
    window.clearInterval(this.$on.time)
    this.$pos.transitionMove = false
    //
    

    let matrix = _.getMatrix(this.$dom.content, 'transform')
    let x = matrix[4];
    let y = matrix[5];

    if (this.$pos.inertial) {
        this.$pos.inertial = false
        easeCss(this.$op, this.$dom, x, y)
    };

    [this.$pos.x, this.$pos.y] = setPos(x, y)



    // on
    if (this.$on.scroll) {
        this.$on.scroll.forEach((val: any) => {
            // if (this.$el !== val.el) return
            val.fn.call(this, ev)
        })
    }


}

function onTransitionCancel(ev: any) {
    window.clearInterval(this.$on.time)

    let matrix = _.getMatrix(this.$dom.content, 'transform')
    let x = matrix[4];
    let y = matrix[5];

    [this.$pos.x, this.$pos.y] = setPos(x, y)

    // on
    if (this.$on.scroll) {
        this.$on.scroll.forEach((val: any) => {
            val.fn.call(this, ev)
        })
    }

}


export {
    onTransitionStart,
    onTransitionEnd,
    onTransitionCancel,
}