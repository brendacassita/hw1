// // forEach

// performs a function on each item in array
// returns: undefined
// let returnval = [1,2,3,4,5].forEach((num)=>{
//   if (num % 2 ===0){
//     console.log('even')
//     }else{
//       console.log('odd')
//     }
//   }
// )
// console.log(returnval)


// // map

// performs a function on each item in array
// pushes that result in new array
// returns: an arrray of new results of function

// let originalArray = [1,2,3,4]
// let newDoubledArray = originalArray.map((num)=>{

//   return num * 2
// })
// console.log(originalArray)
// console.log(newArray)


// // filter

// performs a function on each item in array
// keeps the values in a new array if function returns true
// returns: an array of filtered values
// let evens = [1,2,3,4].filter((num)=>{
//   return num % 2 === 0
// })
// console.log(evens)

let people =[
  {id: 1, name: 'brenda', age: 21},
  {id: 2, name: 'zach', age: 22},
  {id: 3, name: 'khai', age: 3},
]

// let chainedDemo = people
// .filter((p)=>{
//   return p.age >= 21
// })
// .map((p)=>{
//   return`${p.name}`
// })
// console.log(chainedDemo)
// console.log()


// // find

// performs a function on each iten in array
// will return the index the first time the function returns true
// returns: index of item. -1 if not found

// person = people.find((p)=>{
//    return p.age >= 21
// })
// console.log(person)


// // findIndex
personIndex = people.findIndex((p)=>{
   return p.id === 2
})
console.log(personIndex)