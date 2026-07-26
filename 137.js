// Promise.resolve
Promise.resolve("Direct Value").then(val => console.log("1.", val));

// .then chaining
wait(500).then(() => {
    console.log("2. Step 1");
    return wait(500);
}).then(() => console.log("3. Step 2"));