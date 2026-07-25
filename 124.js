// event bubling
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", () => console.log("child"));
parent.addEventListener("click", () => console.log("parent"));
grandparent.addEventListener("click", () => console.log("grandparent"));
// click child pe karo to: child -> parent -> grandparent