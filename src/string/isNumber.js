String.prototype.repeat = function(num) {
    var tmpArr = [];
    for(var i=0; i<num; i++) {
        tmpArr.push(this);
    }
    return tmpArr.join('');
}
/**
 * 测试是否是数字
 */
function isNumber (obj) {
    var tmpFloat = parseFloat(obj);
    if (isNaN(tmpFloat)) {
        return false;
    }
    var tmpLen = obj.length - tmpFloat.toString().length;
    return tmpFloat + '0'.repeat(tmpLen) == obj;
}

export default isNumber;