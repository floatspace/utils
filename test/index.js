import isNumber from '../src/string/isNumber.js'
import {trim, trimLeft} from '../src/string/trim.js'

// describe('isNumber.js :', function() {
//     it('isNumber() should work fine.', function() {
//         expect(isNumber(1.0)).toBe(true)
//         expect(isNumber('a')).toBe(false)
//     })
// })
describe('trim.js', function() {
    it('trim() should work fine', function() {
        expect(trim(' asdf  ')).toBe('asdf');
        expect(trimLeft(' asdf')).toBe('asdf');
    })
})