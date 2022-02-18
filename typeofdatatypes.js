// use typeof to find data type of variables
// Strings
alert(typeof "Hello"); // "string"
alert(typeof '12'); // "string"

// Numbers
console.log(typeof(100)); // "number"
console.log(typeof(100.29)); // "number"

// Booleans
alert(typeof true); // "boolean"
alert(typeof(1 == 2)); // "boolean"

// Undefined
console.log(typeof undefined); // "undefined"

var init;
console.log('type of init: ' + typeof init); // "undefined"

// Null
console.log(typeof null); // "object"
var initObject = null;
console.log('type of initObject: ' + typeof initObject);  // "object"

// Objects
alert(typeof {name: 'Dinanath', age: 35}); // "object"
alert(typeof document); // "object"
alert(typeof window); // "object"

// Arrays
var techArray = [];
console.log('type of techArray: ' + typeof techArray);  // "object"
console.log(typeof ['JavaScript', 'jQuery', 'Angular']);  // "object"
console.log(typeof ['Dinanath', 35, 'India']);  // "object"

// Functions
console.log(typeof function(){}); // "function"
console.log(typeof alert); // "function"
console.log(typeof window.alert); // "function"

// Symbol
alert(typeof Symbol("dob")); // "symbol"