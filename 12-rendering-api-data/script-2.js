// Create a Promise object
let sayHello = new Promise(function (resolve, reject) {
  reject("Unable to say hi.");

  // In 5 seconds, resolve the Promise.
  // Pass along "Hi, universe!" to any callback methods
  setTimeout(function () {
    resolve("Hi, universe!");
  }, 5000);
});

// Handle the promise once it resolves or rejects
sayHello
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (error) {
    console.warn(error);
  });
