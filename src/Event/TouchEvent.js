"use strict";
exports.__esModule = true;
var default_1 = require("../default");
var utils_1 = require("../utils");
var GetPos_1 = require("./GetPos");
var View_1 = require("./View");
var Inertial_1 = require("./Inertial");
var Ease_1 = require("./Ease");
function onEventDown(ev) {
    var _a;
    this.isDown = true;
    if (!this.$pos)
        this.$pos = default_1.pos;
    this.dom.content.style.transitionDuration = '0ms';
    if (this.$pos.transitionMove) {
        var matrix = utils_1["default"].getMatrix(this.dom.content, 'transform');
        var x = matrix[4];
        var y = matrix[5];
        View_1.viewPos(this.op, this.dom, x, y);
        _a = GetPos_1.setPos(x, y), this.$pos.x = _a[0], this.$pos.y = _a[1];
    }
    this.$pos.downX = this.isMobile ? ev.touches[0].pageX : ev.pageX;
    this.$pos.downY = this.isMobile ? ev.touches[0].pageY : ev.pageY;
    this.$pos._downX = this.isMobile ? ev.touches[0].pageX : ev.pageX;
    this.$pos._downY = this.isMobile ? ev.touches[0].pageY : ev.pageY;
    this.$pos.downT = ev.timeStamp;
}
exports.onEventDown = onEventDown;
function onEventMove(ev) {
    if (!this.isDown)
        return;
    // 懵逼
    this.$pos.moveX = this.isMobile ? ev.touches[0].pageX : ev.pageX;
    this.$pos.moveY = this.isMobile ? ev.touches[0].pageY : ev.pageY;
    this.$pos.distanceX = this.isMobile ? ev.touches[0].pageX : ev.pageX;
    this.$pos.distanceY = this.isMobile ? ev.touches[0].pageY : ev.pageY;
    this.$pos.disX = this.$pos.moveX - this.$pos.downX;
    this.$pos.disY = this.$pos.moveY - this.$pos.downY;
    // 
    // if (this.$pos.y > this.dom.top || this.$pos.y < this.dom.bottom) {
    //     this.$pos.x += this.$pos.disX * 0.4
    //     this.$pos.y += this.$pos.disY * 0.4
    // } else {
    //     this.$pos.x += this.$pos.disX;
    //     this.$pos.y += this.$pos.disY;
    // }
    var _a = GetPos_1.resistance(this.op, this.dom, this.$pos, this.$pos.disX, this.$pos.disY), x = _a[0], y = _a[1];
    this.$pos.x += x;
    this.$pos.y += y;
    //
    View_1.viewPos(this.op, this.dom, this.$pos.x, this.$pos.y);
    this.$pos.downX = this.$pos.moveX;
    this.$pos.downY = this.$pos.moveY;
}
exports.onEventMove = onEventMove;
function onEventUp(ev) {
    this.isDown = false;
    this.$pos.upT = ev.timeStamp;
    //
    this.dom.content.style.transitionDuration = '300ms';
    this.dom.content.style.transitionTimingFunction = 'ease';
    this.dom.content.style.transitionProperty = 'transform';
    var time = this.$pos.upT - this.$pos.downT;
    this.$pos.inertial = Inertial_1.InertialCss(this.op, this.dom, this.$pos, time, 0.008);
    if (!this.$pos.inertial)
        Ease_1.easeCss(this.op, this.dom, this.$pos.x, this.$pos.y);
}
exports.onEventUp = onEventUp;
