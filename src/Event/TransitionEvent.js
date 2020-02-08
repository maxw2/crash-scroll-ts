"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var GetPos_1 = require("./GetPos");
var Ease_1 = require("./Ease");
function onTransitionStart(ev) {
    this.$pos.transitionMove = true;
}
exports.onTransitionStart = onTransitionStart;
function onTransitionMove(ev) {
    console.log('tranistionMove');
}
exports.onTransitionMove = onTransitionMove;
function onTransitionEnd(ev) {
    var _a;
    this.$pos.transitionMove = false;
    console.log('tranistionEnd');
    var matrix = utils_1["default"].getMatrix(this.dom.content, 'transform');
    var x = matrix[4];
    var y = matrix[5];
    if (this.$pos.inertial) {
        this.$pos.inertial = false;
        Ease_1.easeCss(this.op, this.dom, x, y);
    }
    _a = GetPos_1.setPos(x, y), this.$pos.x = _a[0], this.$pos.y = _a[1];
}
exports.onTransitionEnd = onTransitionEnd;
function onTransitionCancel(ev) {
    console.log('tranistionCancel');
    // let time = Math.round(ev.timeStamp - this.$pos.startTime) / this.$pos.duration;
    // let x = this.$pos.x * time;
    // let y = this.$pos.y * time;
    // [this.$pos.x, this.$pos.y] = setPos(x, y)
    // viewPos(this.op, this.dom, this.$pos.x, this.$pos.y)
}
exports.onTransitionCancel = onTransitionCancel;
function stopTransition(dom) {
    var content = dom.content;
    content.style.transitionDuration = '0s';
}
exports.stopTransition = stopTransition;
