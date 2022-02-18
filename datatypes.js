// name, age, dob, eye color, friends, weight, income

// Primitive (Primary or Value) data type

// String
// Number
// Boolean
// Undefined
// Null

// string - sequence of characters
// '', "", ``
let string1 = 'asdfasdf'

//string interpolation
let bt = `1+1  = ${1+1}`
console.log(bt)

console.log(typeof string1)

// Number
let age = 21 

console.log(typeof age)
console.log(typeof 21.0)

let dob = '6/27/1983'
console.log(typeof dob)

// other types in js
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof NaN)

console.log(typeof true)
console.log(typeof false)

// Arrays - index at 0 lists
const people = ['John','Jill','Joe']

console.log(people)
console.log(people[0])
console.log(people[2])

// Objects - key value pairstore
let person = {
    name:'Tony',
    age:21,
}

console.log(person.name)
console.log(person.age)