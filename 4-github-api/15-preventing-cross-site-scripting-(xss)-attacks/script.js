// Add "Hello, world!"
let div = document.querySelector("#app");
div.innerHTML = "<h1>Hello, world!</h1>";

// This won't run
div.innerHTML += `<script>alert("XSS Attack");<\/script>`;

// This WILL run
div.innerHTML += `<p><img src=x onerror="alert('One more XSS Attack')"></p>`;

// Links are also an attack vector
div.innerHTML += `<p><a href="javascript:alert('Another XSS Attack')">Click Me</a></p>`;
