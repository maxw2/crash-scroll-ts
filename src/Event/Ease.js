"use strict";
exports.__esModule = true;
var View_1 = require("./View");
/**
 * @name 回弹
 * @param {object} element
 * @return {Array} x,y
 */
function easeCss(options, dom, x, y) {
    var scrollX = options.scrollX;
    var content = dom.content;
    var left = dom.left;
    var right = dom.right;
    var top = dom.top;
    var bottom = dom.bottom;
    var _x = x;
    var _y = y;
    if (!scrollX) {
        if (y > top) {
            View_1.viewPos(options, dom, null, top);
            return [x, top];
        }
        else if (y < bottom) {
            View_1.viewPos(options, dom, null, bottom);
            return [x, bottom];
        }
    }
    return [x, y];
}
exports.easeCss = easeCss;
