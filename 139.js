const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.onload = () => {
    console.log("1. XHR Data:", JSON.parse(xhr.response).title);
};
xhr.send();