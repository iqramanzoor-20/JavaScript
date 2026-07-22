// 8. More about proto vs prototype
// __proto__ = har object ki property, parent ko point karti hai
// prototype = sirf function ki property, jis se naye object banenge

// 9. Class keyword - ye sab ka sugar syntax hai
class Animal {
    constructor(name){
        this.name = name;
    }
    // methods automatically prototype me chale jate hain
    speak(){
        console.log(this.name, "makes sound");
    }
}

class Dog extends Animal { // inheritance
    constructor(name, breed){
        super(name); // parent constructor call
        this.breed = breed;
    }
    bark(){
        console.log("woof");
    }
}

const dog1 = new Dog("Sheru", "German");
dog1.speak(); // Sheru makes sound
dog1.bark(); // woof