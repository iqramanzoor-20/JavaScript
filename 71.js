// 1. Methods in Objects
const user = {
    firstName: "Harshit",
    lastName: "Sharma",
    fullName: function(){
        return this.firstName + " + this.lastName";
    }
}
console.log(user.fullName()); // Harshit Sharma
