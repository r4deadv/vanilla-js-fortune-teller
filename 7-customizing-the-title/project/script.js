// Get the DOM elements
let toc = document.querySelector("#table-of-contents");
let headings = document.querySelectorAll("h2");
const tocTitle = toc.getAttribute("data-toc");
/**
 * Get the ID for a heading
 * @param  {Node}   heading The heading
 * @return {String}         The ID
 */
function getID(heading) {
  // If there's no ID, create one
  if (!heading.id) {
    heading.id = heading.textContent.replaceAll(" ", "-").toLowerCase();
  }

  // Return the heading ID
  return heading.id;
}

// Create the HTML
let html = "";
for (let heading of headings) {
  html += `<li><a href="#${getID(heading)}">${heading.textContent}</a></li>`;
}

// If there's content, render it into the UI
if (html) {
  toc.innerHTML = `<p><strong>${
    tocTitle ? tocTitle : "Table of Contents"
  }</strong></p>
					<ol>
						${html}
					</ol>`;
}
