// difference b/w dot and bracket notaion 
// const person={
//     name:"iqra",
//     age:20,
//     "person hobbies":["book reading"]
// }
// console.log(person["person hobbies"]);
const key ="email";
const person={
    name:"iqra",
    age:20,
    "person hobbies":["book reading"]
}
// console.log(person["person hobbies"]);
person["key"]="iqra@gmail.com";
console.log(person);
