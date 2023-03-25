// Get the DOM elements
let toc = document.querySelector("#table-of-contents");
let headings = document.querySelectorAll("h2");

// Create the HTML
let html = "";
for (let heading of headings) {
  if (!heading.id) {
    heading.id = heading.textContent.toLowerCase().replaceAll(" ", "-");
  }
  html += `<li><a href="#${heading.id}">${heading.textContent}</a></li>`;
}

// If there's content, render it into the UI
if (html) {
  toc.innerHTML = `<p><strong>Table of Contents</strong></p>
      <ol>
        ${html}
      </ol>`;
}
