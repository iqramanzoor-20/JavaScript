
// 6. new keyword kya karta hai
// step1: {} empty object banata hai
// step2: this = {} set karta hai  
// step3: __proto__ ko function.prototype se link karta hai
// step4: object return karta hai

// 7. Constructor function with new
function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    console.log("Hi", this.name);
}

const p1 = new Person("Zain");
p1.sayHi(); // Hi Zain
console.log(p1.__proto__ === Person.prototype); // true
