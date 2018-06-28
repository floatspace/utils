/**
 * 测试是否是数字
 */
function isNumber (obj) {
    var tmpFloat = parseFloat(obj);
    if (isNaN(tmpFloat)) {
        return false;
    }
    var tmpLen = obj.length - tmpFloat.toString().length;
    return tmpFloat + '0'.Repeat(tmpLen) == obj;
}

export default isNumber;