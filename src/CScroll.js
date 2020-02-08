"use strict";
exports.__esModule = true;
var initData_1 = require("./data/initData");
var initEvent_1 = require("./Event/initEvent");
var CScroll = /** @class */ (function () {
    function CScroll(element, options) {
        typeof element === 'string' ?
            this.el = document.querySelector(element) :
            this.el = element;
        var _a = initData_1.initData(this.el, options), dom = _a[0], option = _a[1];
        this.dom = dom;
        this.op = option;
        this.el.op = option;
        this.el.dom = dom;
        initEvent_1.initEvent(this.el);
    }
    return CScroll;
}());
exports.CScroll = CScroll;
