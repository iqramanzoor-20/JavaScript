// 5. Optional Chaining?.
// error se bachata hai jab property exist na kare
const person = {
    name: "Ali",
    address: {
        city: "Peshawar"
    }
}

console.log(person.address?.city); // Peshawar
console.log(person.phone?.number); // undefined, error nahi aayega

const users = [
    {id: 1, profile: {name: "Sara"}}
]
console.log(users[0]?.profile?.name); // Sara
console.log(users[1]?.profile?.name); // undefined