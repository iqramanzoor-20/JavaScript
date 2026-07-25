// callback in General
function greet(name){
    console.log("Hello",name);
}

function myFunction(callback){
    callback("iqra ");
}

myFunction(greet);