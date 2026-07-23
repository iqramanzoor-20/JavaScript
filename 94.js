// lexical environment, scope chain

const lastName = "manzoor ahmad ";

const printName = function(){
    const firstName = "iqra";
    
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}

printName();