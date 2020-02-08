"use strict";
exports.__esModule = true;
var default_1 = require("../default");
var utils_1 = require("../utils");
// 暴露方法 导出属性
function initData(element, options) {
    var dom = initDom(element);
    var op = initOp(options);
    checkDomData(dom, options);
    return [dom, op];
}
exports.initData = initData;
//  初始化元素结构
function initDom(element) {
    var el = element;
    var content = el.firstElementChild;
    var el_w = el.clientWidth;
    var el_h = el.clientHeight;
    var content_w = content.clientWidth;
    var content_h = content.clientHeight;
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
    };
}
// 初始化设置项
function initOp(options) {
    return utils_1["default"].deepClone(options, default_1._default);
}
// 检查dom
function checkDomData(dom, options) {
    if (options.scrollX) {
        if (dom.el_w > dom.content_w)
            throw new TypeError('内部元素宽度应大于外部元素');
    }
    if (!options.scrollX) {
        if (dom.el_h > dom.content_h)
            throw new TypeError('内部元素高度应大于外部元素');
    }
}
