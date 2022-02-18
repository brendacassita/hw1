// if(condition){
//     //run if condition is truthy 
// }

// if(condition){
//     //run if condition is truthy 
// } else {
  //     //run if condition is falsey  
// }

// if(condition1){
//     //run if condition1 is truthy 
// } else if(condition1)
    //run if condition is truthy 
//else {
  //     //run if condition is falsey  
// }

let lightColor = 'red'


// IF
if(lightColor === 'green'){
    console.log('go')
} 

//IF ELSE
if(lightColor === 'green'){
    console.log('go')
} else{
    console.log('stop')
}


lightColor = 'yellow'
let safeToCross = true
// IF ELSE IF
if(lightColor === 'green'){
    console.log('go')
} else if(lightColor ==='yellow'){
    if(safeToCross){
      console.log('go but speed up')
    }else {
      console.log('hit brakes rapidly')
    }
} else{
    console.log('gradually stop')
}

 
if((lightColor === 'green' || lightColor === 'yellow') && safeToCross){
    console.log('go')
} else {
    console.log('stop')
}