/**
 * 完美继承
 */
function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

function inherit(subType, superType) {
    var p = object(superType.prototype);
    p.constructor = subType;
    subType.prototype = p;
}

export default inherit;

/*====== Test ======*/
function Super(name) {
    this.name = name;
    this.colors = ['red', 'blue'];
}
Super.prototype.getName = function () {
    console.log(this.name);
}

function Sub(name, age) {
    Super.call(this, name);
    this.age = age;
}
inherit(Sub, Super);
Sub.prototype.getAge = function () {
    console.log(this.age);
}

var ins1 = new Sub('flower1', 6);
ins1.colors.push('yellow');
ins1.getName(); // -> flower1
ins1.getAge(); // -> 6
console.log(ins1.colors); // -> ["red", "blue", "yellow"]

var ins2 = new Sub('flower2', 8);
ins2.colors.push('green');
ins2.getName(); // -> flower2
ins2.getAge(); // -> 8
console.log(ins1.colors); // -> ["red", "blue", "green"]

/*====== Test ======*/