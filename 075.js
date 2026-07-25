
// 5. This inside Arrow functions
const obj2 = {
    count: 0,
    inc: function(){
        const inner = () => {
            this.count++; // arrow function parent ka this leti hai
            console.log(this.count);
        }
        inner();
    }
}
obj2.inc(); // 1
