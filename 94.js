// lexical environment, scope chain

const lastName = "Vashistha";

const printName = function(){
    const firstName = "harshit";
    Function myFunction(){
    console.log(firstName);
    console.log(lastName);
}
myFunction();
}

printName();