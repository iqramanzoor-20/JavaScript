js// 1. Example using class keyword
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`${this.name} makes a sound`);
    }
}

const animal1 = new Animal("Dog", 3);
animal1.speak(); // Dog makes a sound

