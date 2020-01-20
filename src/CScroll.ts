import { initData } from './data/initData'
import { initEvent } from './Event/initEvent'


class CScroll {
    el: any
    op: object
    dom?: object

    constructor(element: object | string, options: object) {
        typeof element === 'string' ?
            this.el = document.querySelector(element) :
            this.el = element

        const [dom, option] = initData(this.el, options)
        this.dom = dom
        this.op = option
        this.el.op = option
        this.el.dom = dom
        initEvent(this.el)

    }
}


export { CScroll }