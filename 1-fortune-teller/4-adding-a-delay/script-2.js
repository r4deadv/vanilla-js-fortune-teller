// Log the user out after 4 seconds
let isActive = setTimeout(function () {
  app.textContent = `You've been logged out.`;
}, 4000);

// But if they click anywhere on the page, keep them logged in
document.addEventListener("click", function () {
  clearTimeout(isActive);
  app.textContent = `You're still logged in, yay!`;
});
