let elem = document.querySelector("#lunch");

// Get the value of the [data-sandwich] attribute
let sandwich = elem.getAttribute("data-sandwich");
console.log(sandwich);

// Set a value for the [data-sandwich] attribute
elem.setAttribute("data-sandwich", "turkey");

// Remove the [data-chips] attribute
elem.removeAttribute("data-chips");

// Check if an element has the `[data-drink]` attribute
if (elem.hasAttribute("data-drink")) {
  console.log("Add a drink!");
}

let id = elem.getAttribute("id");
console.log(id);
