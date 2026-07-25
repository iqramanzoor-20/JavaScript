
// 3. Call, Apply, Bind method
const person1 = { name: "Ali" };
const person2 = { name: "Sara" };

function greet(city, country){
    console.log(this.name, city, country);
}

greet.call(person1, "Peshawar", "Pakistan"); // Ali Peshawar Pakistan
greet.apply(person2, ["Lahore", "Pakistan"]); // Sara Lahore Pakistan

const boundFunc = greet.bind(person1, "Karachi", "Pakistan");
boundFunc(); // Ali Karachi Pakistan