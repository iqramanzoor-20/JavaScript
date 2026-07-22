// 3. __proto__ and prototype
const obj1 = { key1: "value1" };
const obj2 = Object.create(obj1); // obj2 ka __proto__ = obj1
console.log(obj2.__proto__); // {key1: "value1"}
console.log(obj2.key1); // value1 -> prototype chain se mila
