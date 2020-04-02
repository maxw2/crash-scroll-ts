import { CScroll } from '../core/CScroll'
import { SDOM, OPTIONS, ON } from './interface'
import { initSwiperData } from './data/initSData'
import { initEvent } from './event/initEvent'
import { getBou } from './event/getBou'

class Swiper extends CScroll {
    $sdom: SDOM

    constructor(element: string | object, options: OPTIONS) {
        super(element, options)
        this.$op.swiper = true
        this.$sdom = initSwiperData(this)
        if (this.$op.scrollX) {
            [this.$dom.left, this.$dom.right] = getBou(this.$sdom.children[0].left, this.$sdom.children[0].right)
        } else {
            [this.$dom.top, this.$dom.bottom] = getBou(this.$sdom.children[0].top, this.$sdom.children[0].bottom)
        }
        initEvent(this)
        
    }



}


export { Swiper }