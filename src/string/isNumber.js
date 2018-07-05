/**
 * 测试是否是数字
 * 校验只要是数字（包含正负整数，0以及正负浮点数）就返回true
 */
function isNumber(val) {
    if (val === "" || val == null) {
        return false;
    }
    if (!isNaN(val)) {
        return true;
    } else {
        return false;
    }
}

export default isNumber;