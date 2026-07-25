function myFunction(power){
  return function(number){
    return number ** power
  }
}

const square = myFunction(2);
const ans = square(3);
console.log(ans);  // 9

const cube = myFunction(3);
const ans2 = cube(3);
console.log(ans2); // 27