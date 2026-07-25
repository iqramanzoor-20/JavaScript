// practice with event 

const input = document.querySelector("input");

input.addEventListener("keyup", function(e){
  console.log(e.target.value);
});