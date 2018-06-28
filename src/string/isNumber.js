/**
 * 测试是否是数字
 */
function isNumber () {
    var tmpFloat = parseFloat(this);
    if (isNaN(tmpFloat)) {
        return false;
    }
    var tmpLen = this.length - tmpFloat.toString().length;
    return tmpFloat + '0'.Repeat(tmpLen) == this;
}

export default isNumber;