import { pos } from '../default'
import _ from '../utils'
import { setPos, resistance } from './GetPos'
import { viewPos } from './View'
import { InertialCss } from './Inertial'
import { easeCss } from './Ease'

function onEventDown(ev: any) {
    this.isDown = true
    if (!this.$pos) this.$pos = pos
    this.dom.content.style.transitionDuration = '0ms'
    if (this.$pos.transitionMove) {
        let matrix = _.getMatrix(this.dom.content, 'transform')
        let x = matrix[4];
        let y = matrix[5];

        viewPos(this.op, this.dom, x, y);
        [this.$pos.x, this.$pos.y] = setPos(x, y)
    }


    this.$pos.downX = this.isMobile ? ev.touches[0].pageX : ev.pageX
    this.$pos.downY = this.isMobile ? ev.touches[0].pageY : ev.pageY
    this.$pos._downX = this.isMobile ? ev.touches[0].pageX : ev.pageX
    this.$pos._downY = this.isMobile ? ev.touches[0].pageY : ev.pageY
    this.$pos.downT = ev.timeStamp


}


function onEventMove(ev: any) {
    if (!this.isDown) return

    // 懵逼
    this.$pos.moveX = this.isMobile ? ev.touches[0].pageX : ev.pageX
    this.$pos.moveY = this.isMobile ? ev.touches[0].pageY : ev.pageY
    this.$pos.distanceX = this.isMobile ? ev.touches[0].pageX : ev.pageX
    this.$pos.distanceY = this.isMobile ? ev.touches[0].pageY : ev.pageY
    this.$pos.disX = this.$pos.moveX - this.$pos.downX
    this.$pos.disY = this.$pos.moveY - this.$pos.downY

    // 
    // if (this.$pos.y > this.dom.top || this.$pos.y < this.dom.bottom) {
    //     this.$pos.x += this.$pos.disX * 0.4
    //     this.$pos.y += this.$pos.disY * 0.4

    // } else {
    //     this.$pos.x += this.$pos.disX;
    //     this.$pos.y += this.$pos.disY;
    // }
    let [x, y] = resistance(this.op, this.dom, this.$pos, this.$pos.disX, this.$pos.disY)
    this.$pos.x += x
    this.$pos.y += y



    //

    viewPos(this.op, this.dom, this.$pos.x, this.$pos.y)



    this.$pos.downX = this.$pos.moveX
    this.$pos.downY = this.$pos.moveY
}

function onEventUp(ev: any) {
    this.isDown = false;
    this.$pos.upT = ev.timeStamp
    //
    this.dom.content.style.transitionDuration = '300ms'
    this.dom.content.style.transitionTimingFunction = 'ease'
    this.dom.content.style.transitionProperty = 'transform'

    let time = this.$pos.upT - this.$pos.downT


    this.$pos.inertial = InertialCss(this.op, this.dom, this.$pos, time, 0.008)

    if (!this.$pos.inertial) easeCss(this.op, this.dom, this.$pos.x, this.$pos.y)




}


export {
    onEventDown,
    onEventMove,
    onEventUp
}