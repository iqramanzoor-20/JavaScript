// 2. This keyword, Window object
console.log(this); // browser me Window object, node me {}
function showThis(){
    console.log(this);
}
showThis(); // Window / undefined in strict mode