// nested if else
     
let winningNumber = 19;
let userGuess = +prompt("guess a number");
console.log(typeof userGuess,userGuess);

if(userGuess === winningNumber){
    console.log("your guess is right!!");
}else{
    console.log("your guess is wrong!!!");   
}
// else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }
// }