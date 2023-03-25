// Delay a function
setTimeout(function () {
  console.log("I will run after 2 seconds");
}, 2000);

// Use a named function
function logMe() {
  console.log("I will run after 4 seconds");
}

setTimeout(logMe, 4000);
