
function initOn(Cscroll: any) {
    Cscroll.on = on
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
            if (this.$on.scroll.indexOf(fun)) this.$on.scroll.push(fun)
            break;
        case 'mousedown':
            if (this.$on.mousedown.indexOf(fun)) this.$on.mousedown.push(fun)
            break;
        case 'mousemove':
            if (this.$on.mousemove.indexOf(fun)) this.$on.mousemove.push(fun)
            break;
        case 'mouseup':
            if (this.$on.mouseup.indexOf(fun)) this.$on.mouseup.push(fun)
            break;
    }
    console.log(this)
}

export {
    initOn
}