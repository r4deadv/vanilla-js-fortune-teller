// A dangerous URL
let url = `javascript:alert('Another XSS Attack')`;

// Create the link
let link = document.createElement("a");

// Add your content
link.textContent = `Click Me`;

// Sanitize and add the URL
link.href = url.replace(/javascript:/gi, "");

// Get the node to inject your content into
let app = document.querySelector("#app");

// Insert the content into the app
app.append(link);
