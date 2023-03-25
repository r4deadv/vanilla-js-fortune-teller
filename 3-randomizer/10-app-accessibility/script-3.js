let form = document.querySelector("form");

// Show a status message
function showStatus() {
  // Create a notification
  let notification = document.createElement("div");
  notification.setAttribute("aria-live", "polite");

  // Inject it into the DOM
  form.append(notification);

  // Add text after it's in the UI
  setTimeout(function () {
    notification.textContent = "Your password was updated!";
  }, 1);

  // Remove it after 4 seconds
  setTimeout(function () {
    notification.remove();
  }, 4000);
}

// Listen for form submit events
form.addEventListener("submit", function (event) {
  // Stop the form from reloading the page
  event.preventDefault();

  // Show a status message
  showStatus();
});
