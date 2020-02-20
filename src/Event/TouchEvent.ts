import { pos } from '../default'
import _ from '../utils'
import { setPos, resistance } from './GetPos'
import { viewPos } from './View'
import { InertialCss } from './Inertial'
import { easeCss } from './Ease'

function onEventDown(ev: any) {
    this.isDown = true
    if (!this.$pos) this.$pos = pos
    this.$dom.content.style.transitionDuration = '0ms'
    if (this.$pos.transitionMove) {
        let matrix = _.getMatrix(this.$dom.content, 'transform')
        let x = matrix[4];
        let y = matrix[5];

        viewPos(this.$op, this.$dom, x, y);
        [this.$pos.x, this.$pos.y] = setPos(x, y)
    }


    this.$pos.downX = this.isMobile ? ev.touches[0].pageX : ev.pageX
    this.$pos.downY = this.isMobile ? ev.touches[0].pageY : ev.pageY
    this.$pos._downX = this.isMobile ? ev.touches[0].pageX : ev.pageX
    this.$pos._downY = this.isMobile ? ev.touches[0].pageY : ev.pageY
    this.$pos.downT = ev.timeStamp

    // on
    if (this.$on.mousedown) {
        this.$on.mousedown.forEach((fn: any) => {
            fn({ x: this.$pos.x, y: this.$pos.y })
        })
    }
}


function onEventMove(ev: any) {
    if (!this.isDown) return
    this.isMove = true
    // 
    this.$pos.moveX = this.isMobile ? ev.touches[0].pageX : ev.pageX
    this.$pos.moveY = this.isMobile ? ev.touches[0].pageY : ev.pageY
    this.$pos.distanceX = this.isMobile ? ev.touches[0].pageX : ev.pageX
    this.$pos.distanceY = this.isMobile ? ev.touches[0].pageY : ev.pageY
    this.$pos.disX = this.$pos.moveX - this.$pos.downX
    this.$pos.disY = this.$pos.moveY - this.$pos.downY


    //
    let [x, y] = resistance(this.$op, this.$dom, this.$pos, this.$pos.disX, this.$pos.disY)
    x = this.$pos.x + x
    y = this.$pos.y + y;
    [this.$pos.x, this.$pos.y] = setPos(x, y)


    //

    viewPos(this.$op, this.$dom, this.$pos.x, this.$pos.y)

    // on
    if (this.$on.mousemove) {
        this.$on.mousemove.forEach((fn: any) => {
            fn({ x: this.$pos.x, y: this.$pos.y })
        })
    }
    if (this.$on.scroll) {
        this.$on.scroll.forEach((fn: any) => {
            fn({ x: this.$pos.x, y: this.$pos.y })
        })
    }

    this.$pos.downX = this.$pos.moveX
    this.$pos.downY = this.$pos.moveY
}

function onEventUp(ev: any) {

    this.$pos.upT = ev.timeStamp
    //
    this.$dom.content.style.transitionDuration = '300ms'
    this.$dom.content.style.transitionTimingFunction = 'ease'
    this.$dom.content.style.transitionProperty = 'transform'

    let time = this.$pos.upT - this.$pos.downT


    this.$pos.inertial = InertialCss(this.$op, this.$dom, this.$pos, time, 0.008, this.isMove)

    if (!this.$pos.inertial) easeCss(this.$op, this.$dom, this.$pos.x, this.$pos.y)

    // on
    if (this.$on.mouseup) {
        this.$on.mouseup.forEach((fn: any) => {
            fn({ x: this.$pos.x, y: this.$pos.y })
        })
    }

    this.isDown = false;
    this.isMove = false

}


export {
    onEventDown,
    onEventMove,
    onEventUp
}