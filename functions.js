//small programs - very simple to do one thing
// define them once and we can reuse the function again and again

function sayHello(){
  // do stuff
  console.log('hello')
}

// invoke or call function do this n times
sayHello()


// arrow syntax (new with ES6)
const sayHola = ()=>{
  console.log('hola')
}

sayHola()

//PARAMETERS & ARGUMENTS
//define function with param
//think of param as variable that is only visible to function

// a function can only return one thing
function introducePerson(person){
  console.log(`hello ${person}, I'm Brenda`)
}
// here pass function as argument
introducePerson('Jon')


function add(num1, num2){
  return num1 + num2
}
let sum = (1,1)
console.log(sum)

//once a function returns it quits
const evenOrOdd = (num)=>{
  if(num % 2 ==0){
    return 'even'
  }else{
    return 'odd'
  }
}

let x = evenOrOdd(3)
console.log(x) //odd