
// Convert Callback Hell to Flat
wait(500).then(() => console.log("Flat 1"))
          .then(() => wait(500))
          .then(() => console.log("Flat 2"));

function wait(ms){ return new Promise(r => setTimeout(r, ms)); }