import { SDOM } from '../interface'
import { getBou } from '../event/getBou'


function initSwiperData(CScroll: Object): SDOM {


    return initData(CScroll)

}


function initData(CScroll: any): SDOM {
    const that = CScroll
    const content = that.$dom.content
    const childrenList = content.children

    let el_w = that.$dom.el_w
    let el_h = that.$dom.el_h
    let _left = el_w
    let _top = el_h
    let children = []
    for (let i = 0; i < childrenList.length; i++) {
        let el = childrenList[i]
        let width = el.clientWidth
        let height = el.clientHeight
        let left = _left - width
        let top = _top - height
        children.push({
            width: width,
            height: height,
            left: left,
            right: left - width + that.$dom.el_w,
            top: top,
            bottom: top - height + that.$dom.el_h
        })
        _left = left
        _top = top
    }



    return {
        chilrenLen: children.length,
        children: children
    }
}


function changeBoundary(CScroll: any) {
    let that = CScroll
    let scrollX = that.$op.scrolLX

    if (scrollX) {
        CScroll.$dom.left = that.$sdom.children[0].left
        CScroll.$dom.right = that.$sdom.children[0].right
        // [that.$dom.left, that.$dom.right] = getBou(that.$sdom.children[0].left, that.$sdom.children[0].right)
    } else {
        [that.$dom.top, that.$dom.bottom] = getBou(that.$sdom.children[0].top, that.$sdom.children[0].bottom)
    }


}


export {
    initSwiperData,
    changeBoundary
}