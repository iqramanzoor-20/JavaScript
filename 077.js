// 7. Factory Functions + Memory related problems
// Har bar naya function ban raha hai = memory waste
function createUserBad(name){
    return {
        name: name,
        sayHi: function(){ // har object ke liye naya function
            console.log("Hi", this.name);
        }
    }
}

// Better way: methods ko bahar rakho
const methods = {
    sayHi(){
        console.log("Hi", this.name);
    }
}

function createUserGood(name){
    const user = {};
    user.name = name;
    Object.assign(user, methods); // same method sab share karenge
    return user;
}

const u1 = createUserGood("Ali");
const u2 = createUserGood("Sara");
u1.sayHi();
