
let _: any = {}

/**
 * @param 对象拷贝
 */
_.deepClone = function (target: object, sources: object): object {
    let newObj: object = {}

    const sourObj: object = sources
    const tarObj: object = target
    let sourArr: string[] = Object.keys(sourObj)

    // 目标对象为数组
    if (Array.isArray(tarObj)) {
        newObj = []
        tarObj.map((val, index) => {
            // 检查sources是否拥有属性
            let len: number = sourArr.indexOf("" + index)
            if (len >= 0) {
                sourArr.splice(len, 1)
            }

            // 开始合并
            let tarVal: object = tarObj[index]
            // 数组
            if (Array.isArray(tarVal)) {
                newObj[index] = new Array()
                tarVal.map((val, index) => {
                    if (typeof val === 'object') {
                        newObj[index][index] = _.deepClone(val, {})
                    } else {
                        newObj[index][index] = val
                    }
                })

            }
            // 对象
            else if (typeof tarVal === 'object') {
                for (let _key of Object.keys(tarVal)) {
                    if (typeof tarVal[_key] === 'object') {
                        newObj[index][_key] = _.deepClone(tarVal[_key], {})
                    } else {
                        newObj[index][_key] = tarVal[_key]
                    }
                }
            }
            // 基本类型
            else {
                newObj[index] = tarObj[index]
            }
        })
    }
    // 目标对象为对象
    else {
        for (let key of Object.keys(tarObj)) {
            // 检查sources是否拥有属性
            let len: number = sourArr.indexOf(key)
            if (len >= 0) {
                sourArr.splice(len, 1)
            }

            // 开始合并
            let tarVal: object = tarObj[key]
            // 数组
            if (Array.isArray(tarVal)) {
                newObj[key] = new Array()
                tarVal.map((val, index) => {
                    if (typeof val === 'object') {
                        newObj[key][index] = _.deepClone(val, {})
                    } else {
                        newObj[key][index] = val
                    }
                })

            }
            // 对象
            else if (typeof tarVal === 'object') {
                newObj[key] = {}
                for (let _key of Object.keys(tarVal)) {
                    if (typeof tarVal[_key] === 'object') {
                        newObj[key][_key] = _.deepClone(tarVal[_key], {})
                    } else {
                        newObj[key][_key] = tarVal[_key]
                    }
                }
            }
            // 基本类型
            else {
                newObj[key] = tarObj[key]
            }

        }
    }




    //  sourObj补充
    for (let key of sourArr) {
        if (typeof sourObj[key] === 'object') {
            newObj[key] = _.deepClone(sourObj[key], {})
        } else {
            newObj[key] = sourObj[key]
        }


    }




    return newObj
}
_.getStyle = function (element: any, style: string): string {
    var oStyle = element.currentStyle ? element.currentStyle : window.getComputedStyle(element, null);
    if (oStyle.getPropertyValue) {
        return oStyle.getPropertyValue(style);
    } else {
        return oStyle.getAttribute(style);
    }
}
_.getMatrix = function (element: any, style: string): [number, number, number, number, number, number,] {

    let _style = _.getStyle(element, style)

    let reg = /\d{1,3}\b/g;
    let arr = _style.match(reg).map((val: string) => {
        return Number(val)
    })


    return arr

}

_.getDuration = function (element: any, style: string): number {

    let _style = _.getStyle(element, style)


    let reg = /\d.+\d/g

    let a = Number(_style.match(reg)) * 1000


    return a


}

export default _