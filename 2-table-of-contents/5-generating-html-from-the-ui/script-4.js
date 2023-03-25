let greeting = document.querySelector(".greeting");

// Get HTML content
let html = greeting.innerHTML;
console.log(html);

// Set HTML content
// This replaces what was in there already
greeting.innerHTML =
  'We can dynamically change the HTML. We can even include HTML elements like <a href="#">this link</a>.';

// Add HTML to the end of an element's existing content
greeting.innerHTML += " Add this after what is already there.";

// Add HTML to the beginning of an element's existing content
greeting.innerHTML = "We can add this to the beginning. " + greeting.innerHTML;

// You can inject entire elements into other ones, too
greeting.innerHTML += "<p>A new paragraph</p>";
