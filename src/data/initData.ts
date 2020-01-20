import { DOM, OPTIONS } from '../interface'
import { _default } from '../default'
import _ from '../utils'

// 暴露方法 导出属性
export function initData(element: object, options: OPTIONS): [object, object] {

    let dom = initDom(element)
    let op = initOp(options)
    checkDomData(dom, options)

    return [dom, op]



}

//  初始化元素结构
function initDom(element: any): DOM {
    const el = element
    const content = el.firstElementChild
    const el_w = el.clientWidth
    const el_h = el.clientHeight
    const content_w = content.clientWidth
    const content_h = content.clientHeight


    return {
        el: el,
        content: content,
        el_w: el_w,
        el_h: el_h,
        content_w: content_w,
        content_h: content_h,
        left: 0,
        right: content_w - el_w,
        top: 0,
        bottom: -(content_h - el_h)
    }



}

// 初始化设置项
function initOp(options: OPTIONS): OPTIONS {

    return _.deepClone(options, _default)

}

// 检查dom
function checkDomData(dom: any, options: OPTIONS) {
    if (options.scrollX) {
        if (dom.el_w > dom.content_w) throw new TypeError('内部元素宽度应大于外部元素')
    }
    if (!options.scrollX) {
        if (dom.el_h > dom.content_h) throw new TypeError('内部元素高度应大于外部元素')
    }

}

