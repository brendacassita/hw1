// && (Logical AND) - returns true if both operands are true
console.log('true && true: ', true && true);
console.log('true && false: ', true && false);
console.log('false && true: ', false && true);

// ------------------------------

// || (Logical OR) - returns true if one of the operand is true
console.log('true || true: ', true || true);
console.log('true || false: ', true || false);
console.log('false || true: ', false || true);


let num = 1

num = num + 1
num++

num += 10

console.log(num)

// AND &&
// OR ||
// NOT !
// && (Logical AND) - returns true if both operands are true
console.log('true && true: ', true && true); //true
console.log('true && false: ', true && false); //false
console.log('false && true: ', false && true); //false

// ------------------------------

// || (Logical OR) - returns true if one of the operand is true
console.log('true || true: ', true || true); //true
console.log('true || false: ', true || false); //true
console.log('false || true: ', false || true);  //true


console.log('(false || true && false) || !false)', (false || true && false) || !false);  //true

let num1 = 1
let num2 = '1'
console.log('--------------')

// loose equality 
console.log(num1 == num2)

// strict checks value and type
console.log(num1 === num2)