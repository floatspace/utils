import isNumber from '../src/string/isNumber.js'

describe('isNumber.js :', function() {
    it('isNumber() should work fine.', function() {
        expect(isNumber(1)).toBe(true)
        expect(isNumber('a')).toBe(false)
    })
})