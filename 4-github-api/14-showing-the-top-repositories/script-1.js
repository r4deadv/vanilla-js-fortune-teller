let sandwiches = [
  "turkey",
  "tuna",
  "chicken salad",
  "italian",
  "blt",
  "grilled cheese",
];

// Starting index
let fewerSandwiches = sandwiches.slice(2);
console.log(fewerSandwiches);

// Starting and ending indexes
let fewerSandwiches2 = sandwiches.slice(2, 4);
console.log(fewerSandwiches2);

// Copy an array
let sandwichesCopy = sandwiches.slice();
console.log(sandwichesCopy);
