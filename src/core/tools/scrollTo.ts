import { viewPos } from '../event/View'
import { setPos } from '../event/GetPos'

function scrollTo(number: number) {
    const scrollX = this.$op.scrollX

    if (scrollX) {
        [this.$pos.x, this.$pos.y] = setPos(number, 0)
    } else {
        [this.$pos.x, this.$pos.y] = setPos(0, number)
    }

    viewPos(this.$op, this.$dom, this.$pos.x, this.$pos.y)

    this.$pos.inertial = true
    this.$dom.content.style.transitionDuration = '300ms'
    this.$dom.content.style.transitionTimingFunction = 'ease'
    this.$dom.content.style.transitionProperty = 'transform'


}

export {
    scrollTo
}