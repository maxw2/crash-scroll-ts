"use strict";
exports.__esModule = true;
var _ = {};
/**
 * @param 对象拷贝
 */
_.deepClone = function (target, sources) {
    var newObj = {};
    var sourObj = sources;
    var tarObj = target;
    var sourArr = Object.keys(sourObj);
    // 目标对象为数组
    if (Array.isArray(tarObj)) {
        newObj = [];
        tarObj.map(function (val, index) {
            // 检查sources是否拥有属性
            var len = sourArr.indexOf("" + index);
            if (len >= 0) {
                sourArr.splice(len, 1);
            }
            // 开始合并
            var tarVal = tarObj[index];
            // 数组
            if (Array.isArray(tarVal)) {
                newObj[index] = new Array();
                tarVal.map(function (val, index) {
                    if (typeof val === 'object') {
                        newObj[index][index] = _.deepClone(val, {});
                    }
                    else {
                        newObj[index][index] = val;
                    }
                });
            }
            // 对象
            else if (typeof tarVal === 'object') {
                for (var _i = 0, _a = Object.keys(tarVal); _i < _a.length; _i++) {
                    var _key = _a[_i];
                    if (typeof tarVal[_key] === 'object') {
                        newObj[index][_key] = _.deepClone(tarVal[_key], {});
                    }
                    else {
                        newObj[index][_key] = tarVal[_key];
                    }
                }
            }
            // 基本类型
            else {
                newObj[index] = tarObj[index];
            }
        });
    }
    // 目标对象为对象
    else {
        var _loop_1 = function (key) {
            // 检查sources是否拥有属性
            var len = sourArr.indexOf(key);
            if (len >= 0) {
                sourArr.splice(len, 1);
            }
            // 开始合并
            var tarVal = tarObj[key];
            // 数组
            if (Array.isArray(tarVal)) {
                newObj[key] = new Array();
                tarVal.map(function (val, index) {
                    if (typeof val === 'object') {
                        newObj[key][index] = _.deepClone(val, {});
                    }
                    else {
                        newObj[key][index] = val;
                    }
                });
            }
            // 对象
            else if (typeof tarVal === 'object') {
                newObj[key] = {};
                for (var _i = 0, _a = Object.keys(tarVal); _i < _a.length; _i++) {
                    var _key = _a[_i];
                    if (typeof tarVal[_key] === 'object') {
                        newObj[key][_key] = _.deepClone(tarVal[_key], {});
                    }
                    else {
                        newObj[key][_key] = tarVal[_key];
                    }
                }
            }
            // 基本类型
            else {
                newObj[key] = tarObj[key];
            }
        };
        for (var _i = 0, _a = Object.keys(tarObj); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
    }
    //  sourObj补充
    for (var _b = 0, sourArr_1 = sourArr; _b < sourArr_1.length; _b++) {
        var key = sourArr_1[_b];
        if (typeof sourObj[key] === 'object') {
            newObj[key] = _.deepClone(sourObj[key], {});
        }
        else {
            newObj[key] = sourObj[key];
        }
    }
    return newObj;
};
_.getStyle = function (element, style) {
    var oStyle = element.currentStyle ? element.currentStyle : window.getComputedStyle(element, null);
    if (oStyle.getPropertyValue) {
        return oStyle.getPropertyValue(style);
    }
    else {
        return oStyle.getAttribute(style);
    }
};
_.getMatrix = function (element, style) {
    var _style = _.getStyle(element, style);
    var reg = /\-{0,1}\d{1,}\b/g;
    var arr = _style.match(reg).map(function (val) {
        return Number(val);
    });
    return arr;
};
_.getDuration = function (element, style) {
    var _style = _.getStyle(element, style);
    var reg = /\d.+\d/g;
    var a = Number(_style.match(reg)) * 1000;
    return a;
};
exports["default"] = _;
