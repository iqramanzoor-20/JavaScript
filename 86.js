
// 4. Getters and Setters
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getter: property ki tarah use hota hai
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    // setter: value set karne ke liye
    set fullName(name){
        const [first, last] = name.split(" ");
        this.firstName = first;
        this.lastName = last;
    }
}

const p1 = new Person("Ali", "Khan");
console.log(p1.fullName); // Ali Khan - getter
p1.fullName = "Sara Ahmed"; // setter
console.log(p1.firstName); // Sara

