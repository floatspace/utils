/**
 * @desc 自定义方法, 实现字符串反转
 * @param {string}
 * @return {string}
 */
function reverseStr(str) {
	var temStr = '';
    if(typeof str === 'undefined' || str.length === 0 ) {
        return temStr;
    }
	for(var i=str.length-1; i>=0; i--){
		temStr += str.charAt(i)
	}
	return temStr;
}
