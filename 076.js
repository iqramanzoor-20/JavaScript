// 6. Short syntax for methods
const user2 = {
    firstName: "Ahmad",
    // short syntax
    fullName(){
        return this.firstName;
    }
}
console.log(user2.fullName());