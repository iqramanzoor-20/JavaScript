// how event listner woek 
// event listener 2 kaam karta hai:
// 1. event ka wait karta hai
// 2. jab event hota hai to callback chalata hai

document.addEventListener("keydown", (e) => {
  console.log(e.key);
});