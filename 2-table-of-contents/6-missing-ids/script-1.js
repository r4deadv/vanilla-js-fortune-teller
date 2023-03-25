/**
 * Basic String Replace
 */

let chips = "I love Cape Cod potato chips!";

let lays = chips.replace("Cape Cod", "Lays");
console.log(lays);

/**
 * Global Matches
 */

let moreChips = "Cape Cod potato chips are my favorite brand of chips.";

// Only replaces the first instance of the word "chips"
let noChips = moreChips.replace("chips", "deep fried potato slices");
console.log(noChips);

// Replaces all instances of the word "chips"
let noChipsAll = moreChips.replace(
  new RegExp("chips", "g"),
  "deep fried potato slices"
);
console.log(noChipsAll);
