// functions 
function singHappyBirthday(){
    console.log("happy birthday to you ....");
}
function sumThreeNumbers(number1, number2, number3){
    return number1+number2+number3;
}
// const returndvalue = sumThreeNumbers(2,3,5);
// console.log(returndvalue);
// is even 
// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
singHappyBirthday(); // 1

console.log(sumThreeNumbers(2, 3, 5)); // 2

console.log(isEven(10)); // 3

console.log(firstChat("Ali")); // 4

console.log(findTarget([1,2,3,4], 3)); // 5
function isEven(number){
    return number%2=== 0;
}
function firstChat(anyString){
    return anystring[0];
}
    function findTarget(array, target){
        for(let o=0; i<array.lenght; i++){
            if(array[i]===target){
                return i;
            }
        }
        return-1;
    }