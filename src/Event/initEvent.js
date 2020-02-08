"use strict";
exports.__esModule = true;
var GetPos_1 = require("./GetPos");
var TouchEvent_1 = require("./TouchEvent");
var TransitionEvent_1 = require("./TransitionEvent");
function initEvent(element) {
    addEventListener(element);
}
exports.initEvent = initEvent;
/**
 * @name 事件代理
 * @param element
 */
function addEventListener(element) {
    element.isMobile = GetPos_1.isMobile();
    var typeDown = element.isMobile ? 'touchstart' : 'mousedown';
    var typeMove = element.isMobile ? 'touchmove' : 'mousemove';
    var typeUp = element.isMobile ? 'touchend' : 'mouseup';
    element.addEventListener(typeDown, TouchEvent_1.onEventDown);
    element.addEventListener(typeMove, TouchEvent_1.onEventMove);
    element.addEventListener(typeUp, TouchEvent_1.onEventUp);
    element.addEventListener('transitionstart', TransitionEvent_1.onTransitionStart);
    element.addEventListener('transitionrun', TransitionEvent_1.onTransitionMove);
    element.addEventListener('transitionend', TransitionEvent_1.onTransitionEnd);
    element.addEventListener('transitioncancel', TransitionEvent_1.onTransitionCancel);
}
/**
 *
 */
function removeEventListener(element) {
}
