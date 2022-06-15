function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B );

// instanceof will look for prototype chain , hence the prototype of 'a' matches with 'A' which matches the chain with 'B' 
// hence , the instanceof will return "true"