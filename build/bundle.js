!function(c){function Q(s){if(F[s])return F[s].exports;var U=F[s]={i:s,l:!1,exports:{}};return c[s].call(U.exports,U,U.exports,Q),U.l=!0,U.exports}var F={};Q.m=c,Q.c=F,Q.d=function(c,F,s){Q.o(c,F)||Object.defineProperty(c,F,{configurable:!1,enumerable:!0,get:s})},Q.n=function(c){var F=c&&c.__esModule?function(){return c.default}:function(){return c};return Q.d(F,"a",F),F},Q.o=function(c,Q){return Object.prototype.hasOwnProperty.call(c,Q)},Q.p="",Q(Q.s=1)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/**\r\n * @desc 判断元素是否有某个class\r\n * @param {HTMLElement} ele \r\n * @param {String} cls \r\n * @return {Boolean}\r\n */\nfunction hasClass(ele, cls) {\n  return new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)').test(ele.className);\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (hasClass);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvaGFzQ2xhc3MuanM/YzAzMSJdLCJuYW1lcyI6WyJoYXNDbGFzcyIsImVsZSIsImNscyIsIlJlZ0V4cCIsInRlc3QiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQSxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUF1QkMsR0FBdkIsRUFBNEI7QUFDeEIsU0FBUSxJQUFJQyxNQUFKLENBQVcsWUFBWUQsR0FBWixHQUFrQixTQUE3QixDQUFELENBQTBDRSxJQUExQyxDQUErQ0gsSUFBSUksU0FBbkQsQ0FBUDtBQUNIOztBQUVELHlEQUFlTCxRQUFmIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGRlc2Mg5Yik5pat5YWD57Sg5piv5ZCm5pyJ5p+Q5LiqY2xhc3NcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xzIFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlLCBjbHMpIHtcclxuICAgIHJldHVybiAobmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGNscyArICcoXFxcXHN8JCknKSkudGVzdChlbGUuY2xhc3NOYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFzQ2xhc3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsYXNzL2hhc0NsYXNzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_array_arrayEqual_js__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_class_addClass_js__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_class_removeClass_js__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_device_getOS_js__ = __webpack_require__(5);\n\n\n\n\n\nvar arr1 = [1, 2, 3],\n    arr2 = [1, 2, 3];\nconsole.log(Object(__WEBPACK_IMPORTED_MODULE_0__src_array_arrayEqual_js__["a" /* default */])(arr1, arr2));\n\nvar hh = document.querySelector(\'#hh\');\nObject(__WEBPACK_IMPORTED_MODULE_1__src_class_addClass_js__["a" /* default */])(hh, \'red\');\n\nsetTimeout(function () {\n    Object(__WEBPACK_IMPORTED_MODULE_2__src_class_removeClass_js__["a" /* default */])(hh, \'red\');\n}, 2000);\n\nconsole.log(Object(__WEBPACK_IMPORTED_MODULE_3__src_device_getOS_js__["a" /* default */])());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLmpzPzdhMmIiXSwibmFtZXMiOlsiYXJyMSIsImFycjIiLCJjb25zb2xlIiwibG9nIiwiYXJyYXlFcXVhbCIsImhoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2xhc3MiLCJnZXRPUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxPQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVg7QUFBQSxJQUFzQkMsT0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUE3QjtBQUNBQyxRQUFRQyxHQUFSLENBQVksaUZBQUFDLENBQVdKLElBQVgsRUFBaUJDLElBQWpCLENBQVo7O0FBRUEsSUFBSUksS0FBS0MsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFUO0FBQ0EsK0VBQUFDLENBQVNILEVBQVQsRUFBYSxLQUFiOztBQUVBSSxXQUFXLFlBQVc7QUFDbEJDLElBQUEsa0ZBQUFBLENBQVlMLEVBQVosRUFBZ0IsS0FBaEI7QUFDSCxDQUZELEVBRUcsSUFGSDs7QUFJQUgsUUFBUUMsR0FBUixDQUFZLDZFQUFBUSxFQUFaIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlFcXVhbCBmcm9tICcuL3NyYy9hcnJheS9hcnJheUVxdWFsLmpzJztcclxuaW1wb3J0IGFkZENsYXNzIGZyb20gJy4vc3JjL2NsYXNzL2FkZENsYXNzLmpzJztcclxuaW1wb3J0IHJlbW92ZUNsYXNzIGZyb20gJy4vc3JjL2NsYXNzL3JlbW92ZUNsYXNzLmpzJztcclxuaW1wb3J0IGdldE9TIGZyb20gJy4vc3JjL2RldmljZS9nZXRPUy5qcyc7XHJcblxyXG52YXIgYXJyMSA9IFsxLCAyLCAzXSwgYXJyMiA9IFsxLCAyLCAzXTtcclxuY29uc29sZS5sb2coYXJyYXlFcXVhbChhcnIxLCBhcnIyKSk7XHJcblxyXG52YXIgaGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGgnKVxyXG5hZGRDbGFzcyhoaCwgJ3JlZCcpO1xyXG5cclxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIHJlbW92ZUNsYXNzKGhoLCAncmVkJyk7XHJcbn0sIDIwMDApO1xyXG5cclxuY29uc29sZS5sb2coZ2V0T1MoKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/**\r\n * @desc 判断两个数组是否相等\r\n * @param {Array} arr1 \r\n * @param {Array} arr2 \r\n * @return {Boolean}\r\n */\nfunction arrayEqual(arr1, arr2) {\n    if (arr1 === arr2) return true;\n    if (arr1.length != arr2.length) return false;\n    for (var i = 0; i < arr1.length; ++i) {\n        if (arr1[i] !== arr2[i]) return false;\n    }\n    return true;\n}\n/* harmony default export */ __webpack_exports__["a"] = (arrayEqual);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXJyYXkvYXJyYXlFcXVhbC5qcz8yNTI2Il0sIm5hbWVzIjpbImFycmF5RXF1YWwiLCJhcnIxIiwiYXJyMiIsImxlbmd0aCIsImkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQSxTQUFTQSxVQUFULENBQW9CQyxJQUFwQixFQUEwQkMsSUFBMUIsRUFBZ0M7QUFDNUIsUUFBSUQsU0FBU0MsSUFBYixFQUFtQixPQUFPLElBQVA7QUFDbkIsUUFBSUQsS0FBS0UsTUFBTCxJQUFlRCxLQUFLQyxNQUF4QixFQUFnQyxPQUFPLEtBQVA7QUFDaEMsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILEtBQUtFLE1BQXpCLEVBQWlDLEVBQUVDLENBQW5DLEVBQXNDO0FBQ2xDLFlBQUlILEtBQUtHLENBQUwsTUFBWUYsS0FBS0UsQ0FBTCxDQUFoQixFQUF5QixPQUFPLEtBQVA7QUFDNUI7QUFDRCxXQUFPLElBQVA7QUFDSDtBQUNELHlEQUFlSixVQUFmIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGRlc2Mg5Yik5pat5Lik5Liq5pWw57uE5piv5ZCm55u4562JXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycjEgXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycjIgXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBhcnJheUVxdWFsKGFycjEsIGFycjIpIHtcclxuICAgIGlmIChhcnIxID09PSBhcnIyKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmIChhcnIxLmxlbmd0aCAhPSBhcnIyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgaWYgKGFycjFbaV0gIT09IGFycjJbaV0pIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGFycmF5RXF1YWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FycmF5L2FycmF5RXF1YWwuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass__ = __webpack_require__(0);\n/**\r\n * @desc   为元素添加class\r\n * @param  {HTMLElement} ele \r\n * @param  {String} cls \r\n */\n\n\n\nfunction addClass(ele, cls) {\n    if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass__["a" /* default */])(ele, cls)) {\n        ele.className += \' \' + cls;\n    }\n}\n/* harmony default export */ __webpack_exports__["a"] = (addClass);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvYWRkQ2xhc3MuanM/MDI2MCJdLCJuYW1lcyI6WyJhZGRDbGFzcyIsImVsZSIsImNscyIsImhhc0NsYXNzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7Ozs7QUFNQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUF1QkMsR0FBdkIsRUFBNEI7QUFDeEIsUUFBSSxDQUFDLGtFQUFBQyxDQUFTRixHQUFULEVBQWNDLEdBQWQsQ0FBTCxFQUF5QjtBQUNyQkQsWUFBSUcsU0FBSixJQUFpQixNQUFNRixHQUF2QjtBQUNIO0FBQ0o7QUFDQSx5REFBZUYsUUFBZiIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBkZXNjICAg5Li65YWD57Sg5re75YqgY2xhc3NcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsZSBcclxuICogQHBhcmFtICB7U3RyaW5nfSBjbHMgXHJcbiAqL1xyXG5cclxuaW1wb3J0IGhhc0NsYXNzIGZyb20gJy4vaGFzQ2xhc3MnO1xyXG5cclxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlLCBjbHMpIHtcclxuICAgIGlmICghaGFzQ2xhc3MoZWxlLCBjbHMpKSB7XHJcbiAgICAgICAgZWxlLmNsYXNzTmFtZSArPSAnICcgKyBjbHM7XHJcbiAgICB9XHJcbn1cclxuIGV4cG9ydCBkZWZhdWx0IGFkZENsYXNzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGFzcy9hZGRDbGFzcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass__ = __webpack_require__(0);\n/**\r\n * \r\n * @desc 为元素移除class\r\n * @param {HTMLElement} ele \r\n * @param {String} cls \r\n */\n\n\n\nfunction removeClass(ele, cls) {\n    if (Object(__WEBPACK_IMPORTED_MODULE_0__hasClass__[\"a\" /* default */])(ele, cls)) {\n        var reg = new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)');\n        ele.className = ele.className.replace(reg, ' ');\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (removeClass);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3MvcmVtb3ZlQ2xhc3MuanM/ZTBkMSJdLCJuYW1lcyI6WyJyZW1vdmVDbGFzcyIsImVsZSIsImNscyIsImhhc0NsYXNzIiwicmVnIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTs7Ozs7OztBQU9BOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUMzQixRQUFJLGtFQUFBQyxDQUFTRixHQUFULEVBQWNDLEdBQWQsQ0FBSixFQUF3QjtBQUNwQixZQUFJRSxNQUFNLElBQUlDLE1BQUosQ0FBVyxZQUFZSCxHQUFaLEdBQWtCLFNBQTdCLENBQVY7QUFDQUQsWUFBSUssU0FBSixHQUFnQkwsSUFBSUssU0FBSixDQUFjQyxPQUFkLENBQXNCSCxHQUF0QixFQUEyQixHQUEzQixDQUFoQjtBQUNIO0FBQ0o7O0FBRUQseURBQWVKLFdBQWYiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBcclxuICogQGRlc2Mg5Li65YWD57Sg56e76ZmkY2xhc3NcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xzIFxyXG4gKi9cclxuXHJcbmltcG9ydCBoYXNDbGFzcyBmcm9tICcuL2hhc0NsYXNzJztcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZSwgY2xzKSB7XHJcbiAgICBpZiAoaGFzQ2xhc3MoZWxlLCBjbHMpKSB7XHJcbiAgICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbHMgKyAnKFxcXFxzfCQpJyk7XHJcbiAgICAgICAgZWxlLmNsYXNzTmFtZSA9IGVsZS5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUNsYXNzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGFzcy9yZW1vdmVDbGFzcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/**\r\n * @desc 获取操作系统类型\r\n * @return {String} \r\n */\nfunction getOS() {\n    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';\n    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';\n    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';\n\n    if (/mac/i.test(appVersion)) return 'MacOSX';\n    if (/win/i.test(appVersion)) return 'windows';\n    if (/linux/i.test(appVersion)) return 'linux';\n    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios';\n    if (/android/i.test(userAgent)) return 'android';\n    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';\n}\n/* harmony default export */ __webpack_exports__[\"a\"] = (getOS);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGV2aWNlL2dldE9TLmpzP2RjMWQiXSwibmFtZXMiOlsiZ2V0T1MiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ0b0xvd2VyQ2FzZSIsInZlbmRvciIsImFwcFZlcnNpb24iLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUlBLFNBQVNBLEtBQVQsR0FBaUI7QUFDYixRQUFJQyxZQUFZLGVBQWVDLE1BQWYsSUFBeUIsZUFBZUMsU0FBeEMsSUFBcURBLFVBQVVGLFNBQVYsQ0FBb0JHLFdBQXBCLEVBQXJELElBQTBGLEVBQTFHO0FBQ0EsUUFBSUMsU0FBUyxlQUFlSCxNQUFmLElBQXlCLFlBQVlDLFNBQXJDLElBQWtEQSxVQUFVRSxNQUFWLENBQWlCRCxXQUFqQixFQUFsRCxJQUFvRixFQUFqRztBQUNBLFFBQUlFLGFBQWEsZUFBZUosTUFBZixJQUF5QixnQkFBZ0JDLFNBQXpDLElBQXNEQSxVQUFVRyxVQUFWLENBQXFCRixXQUFyQixFQUF0RCxJQUE0RixFQUE3Rzs7QUFFQSxRQUFJLE9BQU9HLElBQVAsQ0FBWUQsVUFBWixDQUFKLEVBQTZCLE9BQU8sUUFBUDtBQUM3QixRQUFJLE9BQU9DLElBQVAsQ0FBWUQsVUFBWixDQUFKLEVBQTZCLE9BQU8sU0FBUDtBQUM3QixRQUFJLFNBQVNDLElBQVQsQ0FBY0QsVUFBZCxDQUFKLEVBQStCLE9BQU8sT0FBUDtBQUMvQixRQUFJLFVBQVVDLElBQVYsQ0FBZU4sU0FBZixLQUE2QixRQUFRTSxJQUFSLENBQWFOLFNBQWIsQ0FBN0IsSUFBd0QsUUFBUU0sSUFBUixDQUFhTixTQUFiLENBQTVELEVBQXFGO0FBQ3JGLFFBQUksV0FBV00sSUFBWCxDQUFnQk4sU0FBaEIsQ0FBSixFQUFnQyxPQUFPLFNBQVA7QUFDaEMsUUFBSSxPQUFPTSxJQUFQLENBQVlELFVBQVosS0FBMkIsU0FBU0MsSUFBVCxDQUFjTixTQUFkLENBQS9CLEVBQXlELE9BQU8sY0FBUDtBQUM1RDtBQUNELHlEQUFlRCxLQUFmIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGRlc2Mg6I635Y+W5pON5L2c57O757uf57G75Z6LXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRPUygpIHtcclxuICAgIHZhciB1c2VyQWdlbnQgPSAnbmF2aWdhdG9yJyBpbiB3aW5kb3cgJiYgJ3VzZXJBZ2VudCcgaW4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSB8fCAnJztcclxuICAgIHZhciB2ZW5kb3IgPSAnbmF2aWdhdG9yJyBpbiB3aW5kb3cgJiYgJ3ZlbmRvcicgaW4gbmF2aWdhdG9yICYmIG5hdmlnYXRvci52ZW5kb3IudG9Mb3dlckNhc2UoKSB8fCAnJztcclxuICAgIHZhciBhcHBWZXJzaW9uID0gJ25hdmlnYXRvcicgaW4gd2luZG93ICYmICdhcHBWZXJzaW9uJyBpbiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKSB8fCAnJztcclxuXHJcbiAgICBpZiAoL21hYy9pLnRlc3QoYXBwVmVyc2lvbikpIHJldHVybiAnTWFjT1NYJ1xyXG4gICAgaWYgKC93aW4vaS50ZXN0KGFwcFZlcnNpb24pKSByZXR1cm4gJ3dpbmRvd3MnXHJcbiAgICBpZiAoL2xpbnV4L2kudGVzdChhcHBWZXJzaW9uKSkgcmV0dXJuICdsaW51eCdcclxuICAgIGlmICgvaXBob25lL2kudGVzdCh1c2VyQWdlbnQpIHx8IC9pcGFkL2kudGVzdCh1c2VyQWdlbnQpIHx8IC9pcG9kL2kudGVzdCh1c2VyQWdlbnQpKSAnaW9zJ1xyXG4gICAgaWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSByZXR1cm4gJ2FuZHJvaWQnXHJcbiAgICBpZiAoL3dpbi9pLnRlc3QoYXBwVmVyc2lvbikgJiYgL3Bob25lL2kudGVzdCh1c2VyQWdlbnQpKSByZXR1cm4gJ3dpbmRvd3NQaG9uZSdcclxufVxyXG5leHBvcnQgZGVmYXVsdCBnZXRPUztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGV2aWNlL2dldE9TLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n")}]);