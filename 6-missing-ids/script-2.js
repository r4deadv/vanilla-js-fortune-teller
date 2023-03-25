// Awkwardly worded, but roll with it
let wizards =
  "Of all the wizards in Lord of the Rings, Radagast is my favorite of the wizards.";

// returns "Of all the sorcerers in Lord of the Rings, Radagast is my favorite of the sorcerers."
let sorcerers = wizards.replaceAll("wizards", "sorcerers");
console.log(sorcerers);
