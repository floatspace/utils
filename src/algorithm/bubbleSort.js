/**
 * 冒泡排序算法
 * @param {array} arr
 * @return {array}
 */
export default function bubbleSort(arr) {
    let len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 1; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { // 相邻元素两两对比
                var temp = arr[j]; // 元素交换
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}