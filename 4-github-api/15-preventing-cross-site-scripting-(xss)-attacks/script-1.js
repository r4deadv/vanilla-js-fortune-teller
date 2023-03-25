/**
 * Adding a simple string
 */

let div = document.querySelector("#app");

// Renders a string with encoded characters
div.textContent = `<img src=x onerror="alert('XSS Attack')">`;

/**
 * Adding HTML using this technique
 */

// Create your element
let content = document.createElement("h1");

// Add your content
content.textContent = `<img src=x onerror="alert('XSS Attack')">`;

// Get the node to inject your content into
let app = document.querySelector("#app");

// Insert the content into the app
app.append(content);
