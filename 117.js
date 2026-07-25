// inside event 

const btn = document.querySelector("button");

btn.addEventListener("click", function(){
  console.log(this); // ye button khud ko point karega
  this.style.backgroundColor = "red";
});