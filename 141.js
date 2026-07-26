function getData(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => xhr.status === 200 ? resolve(JSON.parse(xhr.response)) : reject(xhr.status);
        xhr.onerror = () => reject("Network Error");
        xhr.send();
    });
}

getData("https://jsonplaceholder.typicode.com/posts/1")
.then(post => {
    console.log("1. Post:", post.title);
    return getData("https://jsonplaceholder.typicode.com/users/1");
})
.then(user => console.log("2. User:", user.name))
.catch(err => console.log("Error:", err));