let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  // Stop the form from reloading the page
  event.preventDefault();

  // Display a notification
  let notification = document.querySelector("#notification");
  notification.textContent = "Your password was updated!";
});
