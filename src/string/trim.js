/**
 * 去除前后空格
 * @param {String} str 
 * @returns {String} res
 */
let trim = function(str) {
    // 方法1
    // return str.replace(/(^\s*)|(\s*$)/g, '');
    // 方法2
    while(str[0] === ' ') {
        str = str.substring(1);
    }
    while(str[str.length - 1] === ' ') {
        str = str.substring(0, str.length - 1);
    }
    return str;
};
let trimLeft = function(str) {
    return str.replace(/(^\s*)/g, '');
};
export {trim, trimLeft};