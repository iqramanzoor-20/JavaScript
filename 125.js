// event capturing 

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", () => console.log("child"), true);
parent.addEventListener("click", () => console.log("parent"), true);
grandparent.addEventListener("click", () => console.log("grandparent"), true);
// true = capturing phase: grandparent -> parent -> child