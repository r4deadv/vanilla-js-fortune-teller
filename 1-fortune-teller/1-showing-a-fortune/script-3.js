let greeting = document.querySelector(".greeting");

// Get text content
let text = greeting.textContent;
console.log(text);

// Set text content
// This completely replaces whats there, including any HTML elements
greeting.textContent = "We can dynamically change the content.";

// Add text to the end of an element's existing content
greeting.textContent += " Add this after what is already there.";

// Add text to the beginning of an element's existing content
greeting.textContent =
  "We can add this to the beginning. " + greeting.textContent;

// HTML elements are automatically encoded and rendered as-is
greeting.textContent = "<p>See you later!</p>";
