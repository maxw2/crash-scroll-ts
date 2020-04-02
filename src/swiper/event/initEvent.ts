import { touchesSwiper } from './TouchEvent'

export function initEvent(Swiper: any) {
    const that = Swiper

    that.on('mouseup', touchesSwiper)

}




