// Get the DOM elements
let form = document.querySelector("#add-item");
let list = document.querySelector("#items");
let pick = document.querySelector("#pick");
let chosen = document.querySelector("#chosen");

/**
 * Add an item to the list
 * @param {String} item the item
 */
function addToList(item) {
  // Create a list item
  let li = document.createElement("li");
  li.textContent = item;

  // Add it to the list
  list.append(li);
}

/**
 * Add an item to the list
 * @param {Event} event The event object
 */
function addItem(event) {
  // Stop the form from reloading the page
  event.preventDefault();

  // Get the item
  let formData = new FormData(form);
  let item = formData.get("item");

  // If there's no item, bail
  if (!item) return;

  // Otherwise, add item to the list
  addToList(item);

  // Clear the form
  form.reset();
}

function pickItem() {
  let items = Array.from(document.querySelectorAll("#items li"));

  shuffle(items);

  chosen.textContent = items[0].textContent;
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Listen for submit events on the form
form.addEventListener("submit", addItem);

pick.addEventListener("click", pickItem);
