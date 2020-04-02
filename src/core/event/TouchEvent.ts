import { pos } from '../default'
import _ from '../../utils'
import { setPos, resistance } from './GetPos'
import { viewPos } from './View'
import { InertialCss } from './Inertial'
import { easeCss } from './Ease'

function onEventDown(ev: any) {
    this.$pos.isDown = true
    this.$dom.content.style.transitionDuration = '0ms'

    if (this.$pos.transitionMove) {
        let matrix = _.getMatrix(this.$dom.content, 'transform')
        let x = matrix[4];
        let y = matrix[5];

        viewPos(this.$op, this.$dom, x, y);
        [this.$pos.x, this.$pos.y] = setPos(x, y)
    }

    this.$pos.downX = this.isMobile ? ev.touches[0].clientX : ev.clientX
    this.$pos.downY = this.isMobile ? ev.touches[0].clientY : ev.clientY
    this.$pos._downX = this.isMobile ? ev.touches[0].clientX : ev.clientX
    this.$pos._downY = this.isMobile ? ev.touches[0].clientY : ev.clientY
    this.$pos.downT = ev.timeStamp

    // on
    if (this.$on.mousedown) {
        this.$on.mousedown.forEach((val: any) => {
            if (this.$el !== val.el) return
            val.fn.call(this, ev)
        })
    }
}

function onEventMove(ev: any) {
    if (!this.$pos.isDown) return
    this.$pos.isMove = true
    

    // 
    this.$pos.moveX = this.isMobile ? ev.touches[0].clientX : ev.clientX
    this.$pos.moveY = this.isMobile ? ev.touches[0].clientY : ev.clientY
    this.$pos.disX = this.$pos.moveX - this.$pos._downX
    this.$pos.disY = this.$pos.moveY - this.$pos._downY;
    //                                                                                                                              

    if (this.$op.resistance) [this.$pos.disX, this.$pos.disY] = resistance(this.$op, this.$dom, this.$pos, this.$pos.disX, this.$pos.disY);

    [this.$pos.x, this.$pos.y] = setPos(this.$pos.disX + this.$pos.x, this.$pos.disY + this.$pos.y)

    //
    viewPos(this.$op, this.$dom, this.$pos.x, this.$pos.y)

    // on
    if (this.$on.mousemove) {
        this.$on.mousemove.forEach((val: any) => {
            if (this.$el !== val.el) return
            val.fn.call(this, ev)
        })
    }
    if (this.$on.scroll) {
        this.$on.scroll.forEach((val: any) => {
            if (this.$el !== val.el) return
            val.fn.call(this, ev)
        })
    };
    // console.log(ev.type)
    // console.log('downY', this.$pos.downY)
    // console.log('_downY', this.$pos._downY)
    // console.log('moveY', this.$pos.moveY)
    // console.log('scrollX', this.$op.scrollX)
    
    this.$pos._downX = this.$pos.moveX
    this.$pos._downY = this.$pos.moveY
}

function onEventUp(ev: any) {
    this.$pos.upT = ev.timeStamp
    window.clearInterval(this.time)
    //
    this.$dom.content.style.transitionDuration = '300ms'
    this.$dom.content.style.transitionTimingFunction = 'ease'
    this.$dom.content.style.transitionProperty = 'transform'

    let time = this.$pos.upT - this.$pos.downT

    // on
    if (this.$on.mouseup) {
        this.$on.mouseup.forEach((val: any) => {
            if (this.$el !== val.el) return
            val.fn.call(this, ev)
        })
    }

    this.$pos.inertial = InertialCss(this.$op, this.$dom, this.$pos, time, 0.008, this.$pos.isMove)

    if (!this.$pos.inertial) easeCss(this.$op, this.$dom, this.$pos.x, this.$pos.y)





    this.$pos.isDown = false
    this.$pos.isMove = false
}


export {
    onEventDown,
    onEventMove,
    onEventUp
}