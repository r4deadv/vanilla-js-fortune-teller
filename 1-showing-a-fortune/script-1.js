// The first button
let button = document.querySelector("button");
console.log(button);

// The first element with the .bg-red class
let red = document.querySelector(".bg-red");
console.log(red);

// The first element with a data attribute of snack equal to carrots
let carrots = document.querySelector('[data-snack="carrots"]');
console.log(carrots);

// An element that doesn't exist
let none = document.querySelector(".bg-orange");
console.log(none);

// Verify element exists before doing anything with it
if (none) {
  // Do something...
  console.log("This will not show up...");
}
