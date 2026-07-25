// event object 
const btn = document.querySelector("button");

btn.addEventListener("click", function(e){
  console.log(e); // event object
  console.log(e.target); // jis pe click hua
});