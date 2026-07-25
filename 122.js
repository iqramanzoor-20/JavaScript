// Color changer demo project 
const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach(btn => {
  btn.addEventListener("click", function(e){
    body.style.backgroundColor = e.target.id;
  });
});