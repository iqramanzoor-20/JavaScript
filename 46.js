// arrow function 
// function singHappyBirthday(){
//     console.log("happy birthday to you....");
// }

const singHappyBirthday = () =>{
    console.log("happy birthday to you....");
}
singHappyBirthday();

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(1,2,3);
console.log(ans);

// console.log(sumThreeNumbers(2,3,5));


// const isEven = function(number){
//     return number % 2 === 0;
// }

const isEven = (number) => {
    return number %2 === 0;
}
console.log(isEven(4));

// console.log(isEven(10));


function firstChar(anyString){
    return anyString[0];
}

// console.log(firstChar("Ali"));


const findTarget = function(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findTarget([1,2,3,4],3));