import { on } from './default'
import { OPTIONS, DOM, ON } from './interface'
import { initData } from './data/initData'
import { initEvent } from './event/initEvent'
import { initOn } from './on/initOn'

class CScroll {
    $el: any
    $op: OPTIONS
    $dom?: DOM
    $on: ON = on
    constructor(element: object | string, options: object) {
        typeof element === 'string' ?
            this.$el = document.querySelector(element) : this.$el = element;

        [this.$dom, this.$op] = initData(this.$el, options)
        initEvent(this)
        initOn(this)
    }
}


export { CScroll }