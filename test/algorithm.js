import bubbleSort from '../src/algorithm/bubbleSort'
import quickSort from '../src/algorithm/quickSort'
import insertionSort from '../src/algorithm/insertionSort'
import selectionSort from '../src/algorithm/selectionSort'
// 冒泡排序
describe('bubbleSort.js', function() {
    it('bubbleSort() should work fine', function() {
        expect(bubbleSort([1,3,2]).toString()).toBe('1,2,3')
    })
})
// 快速排序
describe('quickSort.js', function() {
    it('quickSort() should work fine', function() {
        expect(quickSort([1,3,2], 0, 2).toString()).toBe('1,2,3')
    })
})
// 插入排序
describe('insertionSort.js', function() {
    it('insertionSort() should work fine', function() {
        expect(insertionSort([1,3,2]).toString()).toBe('1,2,3')
    })
})
// 选择排序
describe('selectionSort.js', function() {
    it('selectionSort() should work fine', function() {
        expect(selectionSort([1,3,2]).toString()).toBe('1,2,3')
    })
})