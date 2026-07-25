// add event multiple element 

const allBtns = document.querySelectorAll("button");

allBtns.forEach(function(btn){
  btn.addEventListener("click", function(){
    console.log("Clicked");
  });
});