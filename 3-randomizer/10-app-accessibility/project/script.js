// Get the DOM elements
let body = document.querySelector("body");
let form = document.querySelector("#add-item");
let list = document.querySelector("#items");
let pick = document.querySelector("#pick");
let chosen = document.querySelector("#chosen");

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {Array}       The shuffled array
 */
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

function showStatus(item) {
  let notification = document.createElement("div");
  notification.setAttribute("aria-live", "polite");
  body.append(notification);

  setTimeout(() => {
    notification.textContent = `${item} was added to the list`;
  }, 1);

  setTimeout(() => {
    notification.remove();
  }, 3000);
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
  showStatus(item);

  // Clear the form
  form.reset();
}

/**
 * Pick an item from the list
 */
function pickItem() {
  // Get the items
  let items = Array.from(document.querySelectorAll("#items li"));

  // Shuffle the items
  shuffle(items);

  // Display the first item
  chosen.textContent = items[0].textContent;
}

// Listen for events
form.addEventListener("submit", addItem);
pick.addEventListener("click", pickItem);
