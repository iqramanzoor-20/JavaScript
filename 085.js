
// 2. Super keyword + 3. Method overriding
class Dog extends Animal { // inheritance
    constructor(name, age, breed){
        super(name, age); // parent class ka constructor call
        this.breed = breed;
    }
    
    // Method overriding: parent wale speak ko override kar diya
    speak(){
        super.speak(); // parent wala bhi call kar sakte hain
        console.log(`${this.name} barks. Breed: ${this.breed}`);
    }
}

const dog1 = new Dog("Sheru", 2, "German");
dog1.speak();
// Dog makes a sound
// Sheru barks. Breed: German
