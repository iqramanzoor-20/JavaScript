function getData(url){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => console.log("Data:", JSON.parse(xhr.response));
    xhr.onerror = () => console.log("XHR Error");
    xhr.send();
}
getData("https://jsonplaceholder.typicode.com/posts/1");