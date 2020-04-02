
function initOn(Cscroll: any) {
    Cscroll.on = on
    Cscroll.remove = remove
}

/**
 * @name 事件委托
 * @param event 
 */
function on(event: string, fun: object) {
    if (!event) throw new Error('未找到当前事件')
    if (!fun) throw new Error('输入函数')

    switch (event) {
        case 'scroll':
            if (this.$on.scroll.indexOf(fun)) this.$on.scroll.push({ fn: fun, el: this.$el })
            break;
        case 'mousedown':
            if (this.$on.mousedown.indexOf(fun)) this.$on.mousedown.push({ fn: fun, el: this.$el })
            break;
        case 'mousemove':
            if (this.$on.mousemove.indexOf(fun)) this.$on.mousemove.push({ fn: fun, el: this.$el })
            break;
        case 'mouseup':
            if (this.$on.mouseup.indexOf(fun)) this.$on.mouseup.push({ fn: fun, el: this.$el })
            break;
        case 'swiper':
            if (this.$on.swiper.indexOf(fun)) this.$on.swiper.push({ fn: fun, el: this.$el })
            break;
        default:
            throw new Error('未找到指定事件')
    }
}

function remove(event: string, fun: object) {
    if (!event) throw new Error('未找到当前事件')
    if (!fun) throw new Error('输入函数')

    switch (event) {
        case 'scroll':
            var index = this.$on.scroll.indexOf(fun)
            if (index) this.$on.scroll.splice(index, 1)
            break;
        case 'mousedown':
            var index = this.$on.mousedown.indexOf(fun)
            if (index) this.$on.mousedown.splice(index, 1)
            break;
        case 'mousemove':
            var index = this.$on.mousemove.indexOf(fun)
            if (index) this.$on.mousemove.splice(index, 1)
            break;
        case 'mouseup':
            var index = this.$on.mouseup.indexOf(fun)
            if (index) this.$on.mouseup.splice(index, 1)
            break;
        default:
            throw new Error('未找到当前事件');
            return
    }


}

export {
    initOn
}