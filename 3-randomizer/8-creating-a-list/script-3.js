// Get the form
let form = document.querySelector("#post");

// Get all field data from the form
let data = new FormData(form);
console.log(data);

// Loop through each entry
for (let entry of data) {
  console.log(entry);
}

// Destructure the entries into key/value pairs
for (let [key, value] of data) {
  console.log(key);
  console.log(value);
}

// Get the value of the "userId" field
let userId = data.get("userId");
console.log(userId);

// Reset all fields to their original values
form.reset();
