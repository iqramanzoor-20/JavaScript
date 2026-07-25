// this keyword kya hota hai
console.log(this); // 1 line def: current context ko show karta hai

console.log(window);
console.log(myFunction);
console.log(FullName);
function myFunction(){
    console.log("this is my function");
}
console.log(myFunction());

var firstName = "Harshit";
var lastName = "Sharma";
var fullName = firstName +  + lastName;
console.log(fullName);