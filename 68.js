// 3. Maps
// key-value pair store karta hai. Key kuch bhi ho sakti hai
const user = new Map();
user.set("firstName", "Harshit");
user.set("age", 22);
user.set(1, "one");

console.log(user.get("firstName")); // Harshit
console.log(user.has("age")); // true

for(let [key, value] of user){
    console.log(key, value);
}