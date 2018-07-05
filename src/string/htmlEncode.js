/**
 * html转码
 */
export default function htmlEncode(htmlStr) {
    var res = '';
    var q1 = [/x26/g, /x3C/g, /x3E/g, /x20/g];
    var q2 = ['&', '<', '>', ' '];
    for (var i = 0; i < q1.length; i++) {
        res = htmlStr.replace(q1[i], q2[i]);
    }
    return res;
}