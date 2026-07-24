// get and set attribute

const link = document.querySelector("a");

const linkAttribute = link.getAttribute("href");
console.log(linkAttribute);

link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank");