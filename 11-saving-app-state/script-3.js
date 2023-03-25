// Store data
let data = "The data that I want to store for later.";
localStorage.setItem("myDataKey", data);

// Get data
let savedData = localStorage.getItem("myDataKey");
console.log(savedData);

// Remove data
localStorage.removeItem("myDataKey");

// Update and log again
savedData = localStorage.getItem("myDataKey");
console.log(savedData);
