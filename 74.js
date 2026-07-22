// 4. Some warnings
// this kaam nahi karega normal function me alag tarike se
const obj = {
    count: 0,
    inc: function(){
        function inner(){
            // this.count++; // error, this = window
            console.log(this);
        }
        inner();
    }
}
obj.inc();