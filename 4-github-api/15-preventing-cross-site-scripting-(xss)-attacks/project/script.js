/**
 * Sanitize an HTML string
 * @param  {String}          str   The HTML string to sanitize
 * @param  {Boolean}         nodes If true, returns HTML nodes instead of a string
 * @return {String|NodeList}       The sanitized string or nodes
 */
function cleanHTML(str, nodes) {
  /**
   * Convert the string to an HTML document
   * @return {Node} An HTML document
   */
  function stringToHTML() {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, "text/html");
    return doc.body || document.createElement("body");
  }

  /**
   * Check if the attribute is potentially dangerous
   * @param  {String}  name  The attribute name
   * @param  {String}  value The attribute value
   * @return {Boolean}       If true, the attribute is potentially dangerous
   */
  function isPossiblyDangerous(name, value) {
    let val = value.replace(/\s+/g, "").toLowerCase();
    if (["src", "href", "xlink:href"].includes(name)) {
      if (val.includes("javascript:") || val.includes("data:text/html"))
        return true;
    }
    if (name.startsWith("on")) return true;
  }

  /**
   * Remove potentially dangerous attributes from an element
   * @param  {Node} elem The element
   */
  function removeAttributes(elem) {
    // If the node is not an element, bail
    if (elem.nodeType !== 1) return;

    // Otherwise, loop through each attribute
    // If it's dangerous, remove it
    let atts = elem.attributes;
    for (let { name, value } of atts) {
      if (!isPossiblyDangerous(name, value)) continue;
      elem.removeAttribute(name);
    }
  }

  /**
   * Remove <script> elements
   * @param  {Node} html The HTML
   */
  function removeScripts(html) {
    let scripts = html.querySelectorAll("script");
    for (let script of scripts) {
      script.remove();
    }
  }

  /**
   * Remove dangerous stuff from the HTML document's nodes
   * @param  {Node} html The HTML document
   */
  function cleanHTML(html) {
    let nodes = html.childNodes;
    for (let node of nodes) {
      removeAttributes(node);
      cleanHTML(node);
    }
  }

  // Convert the string to HTML
  let html = stringToHTML();

  // Sanitize it
  cleanHTML(html);
  removeScripts(html);

  // If the user wants HTML nodes back, return them
  // Otherwise, pass a sanitized string back
  return nodes ? html.childNodes : html.innerHTML;
}

// Get the DOM nodes
let github = document.querySelector("#github");

/**
 * Render the UI
 * @param  {Object} data The GitHub data
 */
function render(data) {
  // Get variables from the data
  let [profile, repos] = data;

  // Sort the repos by stars
  repos.sort(function (repo1, repo2) {
    if (repo1.stargazers_count > repo2.stargazers_count) {
      return -1;
    }
    return 1;
  });

  // Only keep 5 most starred repositories
  repos = repos.slice(0, 5);

  // Render the UI
  github.innerHTML = cleanHTML(`<div class="gh-grid">
        <div class="gh-avatar">
          <p><img alt="" src="${profile.avatar_url}"></p>
        </div>
        <div class="gh-details">
          <p>
            <strong>${profile.name}</strong><br>
            ${profile.location}<br>
            <em><a href="${profile.url}">${
    profile.public_repos
  } public repos</a></em>
          </p>
          <ul>
            ${repos
              .map(function (repo) {
                return `<li><a href="${repo.html_url}">${repo.name}</a> - ${repo.stargazers_count} Stars</li>`;
              })
              .join("")}
          </ul>
        </div>
      </div>`);
}

// Call the GitHub APIs
Promise.all([
  fetch("https://api.github.com/users/cferdinandi"),
  fetch("https://api.github.com/users/cferdinandi/repos?sort=pushed"),
])
  .then(function (responses) {
    return Promise.all(
      responses.map(function (response) {
        return response.json();
      })
    );
  })
  .then(function (data) {
    console.log(data);
    render(data);
  })
  .catch(function (error) {
    console.warn(error);
  });
