

function touchesSwiper(ev: object) {
    let x = this.$pos.x
    let y = this.$pos.y
    let btn = this.$pos.btn
    let scrollX = this.$op.scrollX
    let children = this.$sdom.children

    
    if (scrollX) {
        let child = children[btn]
        let width = child.width
        let left = child.left
        let right = child.right
        // 向左滑动
        if (x > left + width * 0.5) {
            if (btn === 0) return
            this.$pos.btn = btn - 1
            this.$dom.left = children[this.$pos.btn].left
            this.$dom.right = children[this.$pos.btn].right
        }
        // 向右滑动
        if (x < right - width * 0.5) {
            if (btn === children.length - 1) return
            this.$pos.btn = btn + 1
            this.$dom.left = children[this.$pos.btn].left
            this.$dom.right = children[this.$pos.btn].right
        }
    } else if (!scrollX) {
        let child = children[btn]
        let height = child.height
        let top = child.top
        let bottom = child.bottom
        // 向左滑动
        if (x > top + height * 0.5) {
            if (btn === 0) return
            this.$pos.btn = btn - 1
            this.$dom.top = children[this.$pos.btn].top
            this.$dom.bottom = children[this.$pos.btn].bottom
        }
        // 向右滑动
        if (x < bottom - height * 0.5) {
            if (btn === children.length - 1) return
            this.$pos.btn = btn + 1
            this.$dom.top = children[this.$pos.btn].top
            this.$dom.bottom = children[this.$pos.btn].bottom
        }
    }
}

export {
    touchesSwiper
}