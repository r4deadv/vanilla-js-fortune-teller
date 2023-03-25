// Get the element
let btn = document.querySelector("#click-me-1");

// Listen for clicks on it
btn.addEventListener("click", function (event) {
  console.log("The button was clicked!");
  console.log(event); // The event details
  console.log(event.target); // The clicked element
});
