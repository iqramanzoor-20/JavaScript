
// 5. Use prototype
function CreateUser(name, age){
    this.name = name;
    this.age = age;
}

CreateUser.prototype.about = function(){
    console.log(this.name, this.age);
}
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}

const user1 = new CreateUser("Ali", 22);
const user2 = new CreateUser("Sara", 16);
user1.about(); // Ali 22
console.log(user1.is18()); // true
