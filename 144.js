async function getData(){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
        let data = await res.json();
        console.log("1. Async Await:", data.title);
    }catch(err){
        console.log("Error:", err);
    }
}
getData();