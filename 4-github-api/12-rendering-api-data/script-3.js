// Create a Promise object
let count = new Promise(function (resolve, reject) {
  resolve(1);
});

// Chain Promise.then() methods
count
  .then(function (num) {
    console.log(num);
    return num + 1;
  })
  .then(function (num) {
    console.log(num);
    return num + 1;
  })
  .then(function (num) {
    console.log(num);
    return num + 1;
  });
