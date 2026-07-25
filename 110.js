// document.createElement()
// append
// prepend
// remove

// 1. naya li bana ke sab se pehle add karna - prepend
const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach students");
newTodoItem.textContent = "Teach students";

const todoList = document.querySelector(".todo-list");
todoList.prepend(newTodoItem);

console.log(newTodoItem);

// 2. pehle wala li remove karna
const todo1 = document.querySelector(".todo-list li");
todo1.remove();
// console.log(todo1);


// 3. before / after
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);