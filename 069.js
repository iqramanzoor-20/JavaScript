// 4. Object.assign
// 2 ya zyada objects ko merge karta hai
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {b: 20}; // b overwrite ho jayega

const newObj = Object.assign({}, obj1, obj2, obj3);
console.log(newObj); // {a: 1, b: 20, c: 3, d: 4}
