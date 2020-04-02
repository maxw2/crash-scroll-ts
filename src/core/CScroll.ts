import { on, pos } from './default'
import { OPTIONS, DOM, ON, POS } from './interface'
import { initData } from './data/initData'
import { initEvent } from './event/initEvent'
import { initOn } from './on/initOn'
import { initTools } from './tools/initTools'

class CScroll {
    $el: any
    $op: OPTIONS
    $dom: DOM
    $pos: POS = pos
    $on: ON = on
    constructor(element: object | string, options: OPTIONS) {
        typeof element === 'string' ? this.$el = document.querySelector(element) : this.$el = element;
        
        [this.$dom, this.$op] = initData(this.$el, options)
        initEvent(this)
        initOn(this)
        initTools(this)
    }
}


export { CScroll }