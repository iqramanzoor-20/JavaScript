// reduce 

const numbers = [1,2,3,4,5,10];

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});

console.log(sum);
