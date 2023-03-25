const form = document.getElementById("add-item");
const list = document.getElementById("items");

const item = document.getElementById("item");

function addItem(event) {
  event.preventDefault();

  let formData = new FormData(form);
  let item = formData.get("item");

  if (!item) return;

  addToList(item);
  form.reset();
}

function addToList(item) {
  const li = document.createElement("li");
  li.innerText = item;
  list.append(li);
}

form.addEventListener("submit", addItem);
