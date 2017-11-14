import arrayEqual from './src/array/arrayEqual.js';
import addClass from './src/class/addClass.js';
import removeClass from './src/class/removeClass.js';
import getOS from './src/device/getOS.js';

var arr1 = [1, 2, 3], arr2 = [1, 2, 3];
console.log(arrayEqual(arr1, arr2));

var hh = document.querySelector('#hh')
addClass(hh, 'red');

setTimeout(function() {
    removeClass(hh, 'red');
}, 2000);

console.log(getOS());