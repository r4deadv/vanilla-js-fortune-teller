// Create a Promise object
let sayHello = new Promise(function (resolve, reject) {
  // In 5 seconds, resolve the Promise.
  // Pass along "Hi, universe!" to any callback methods
  setTimeout(function () {
    resolve("Hi, universe!");
  }, 5000);
});

// Handle the promise once it resolves
sayHello.then(function (msg) {
  console.log(msg);
});
