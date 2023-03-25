// Create a new element
let li = document.createElement("li");
li.textContent = "I am new here.";

// Get the parent node
let list = document.querySelector("#list");

// Insert the new node after the last element in the parent node
list.append(li);

// Create another new element
let liToo = document.createElement("li");
liToo.textContent = `I'm new, too!`;

// You can inject more than one item by passing in multiple arguments
list.append(li, liToo);
