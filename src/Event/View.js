"use strict";
exports.__esModule = true;
function viewPos(options, dom, x, y) {
    var scrollX = options.scrollX;
    var content = dom.content;
    if (scrollX) {
        content.style.transform = "translateX(" + x + "px) translateZ(0)";
    }
    else {
        content.style.transform = "translateY(" + y + "px) translateZ(0)";
    }
}
exports.viewPos = viewPos;
