const todoList = document.querySelector(".todo-list");

todoList.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("done");
  }
});