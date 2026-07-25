// event deligation 
const ul = document.querySelector(".todo-list");

ul.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.remove();
  }
});