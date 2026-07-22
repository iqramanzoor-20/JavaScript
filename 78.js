
// 8. Inheritance with Object.create
const proto = {
    greet(){
        console.log("Hello", this.name);
    }
}

const student = Object.create(proto);
student.name = "Zain";
student.greet();