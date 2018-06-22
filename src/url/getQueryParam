/**
 * @desc 获取url中查询字符串的参数
 * @param {string} 查询字符串名称
 * @return {string | number}
 */
function getQueryParam(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r !== null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}
