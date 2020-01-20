import { pos } from '../default'
import { resistance } from './GetPos'
import { viewPos } from './View'

function onEventDown(ev: any) {
    this.isDown = true
    if (!this.$pos) this.$pos = pos

    this.$pos.downX = this.isMobile ? ev.touches[0].pageX : ev.pageX
    this.$pos.downY = this.isMobile ? ev.touches[0].pageY : ev.pageY


}


function onEventMove(ev: any) {
    if (!this.isDown) return

    // 懵逼
    this.$pos.moveX = this.isMobile ? ev.touches[0].pageX : ev.pageX
    this.$pos.moveY = this.isMobile ? ev.touches[0].pageY : ev.pageY

    this.$pos.disX = this.$pos.moveX - this.$pos.downX
    this.$pos.disY = this.$pos.moveY - this.$pos.downY

    // 
    if (this.$pos.y > this.dom.top || this.$pos.y < this.dom.bottom) {
        this.$pos.x += this.$pos.disX * 0.2
        this.$pos.y += this.$pos.disY * 0.2
    } else {
        this.$pos.x += this.$pos.disX;
        this.$pos.y += this.$pos.disY;
    }

    //

    viewPos(this.op, this.dom, this.$pos.x, this.$pos.y)



    this.$pos.downX = this.$pos.moveX
    this.$pos.downY = this.$pos.moveY
}

function onEventUp(ev: any) {
    this.isDown = false;
    //
    this.$pos = null
}


export {
    onEventDown,
    onEventMove,
    onEventUp
}