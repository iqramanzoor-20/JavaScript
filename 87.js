
// 5. Static methods and properties
class MathHelper {
    static PI = 3.1416; // static property

    static square(num){ // static method
        return num * num;
    }

    static cube(num){
        return num * num * num;
    }
}

// static ko object banane ki zarurat nahi
console.log(MathHelper.PI); // 3.1416
console.log(MathHelper.square(5)); // 25
console.log(MathHelper.cube(3)); // 27

// const m = new MathHelper(); 
// m.square(5); // Error: static method object se call nahi hota