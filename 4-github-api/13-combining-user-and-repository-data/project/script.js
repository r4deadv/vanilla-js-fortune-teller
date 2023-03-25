// Get the DOM nodes
let github = document.querySelector("#github");

/**
 * Render the UI
 * @param  {Object} data The GitHub data
 */
const render = (data) => {
  const [user, repos] = data;
  github.innerHTML = `<div class="gh-grid">
        <div class="gh-avatar">
          <p><img alt="" src="${user.avatar_url}"></p>
        </div>
        <div class="gh-details">
          <p>
            <strong>${user.name}</strong><br>
            ${user.location}<br>
            <em><a href="${user.url}">${user.public_repos} public repos</a></em>
          </p>
          <ul>
            ${repos
              .map(
                (repo) =>
                  `<li><a href="${repo.html_url}">${repo.name}</a> - ${repo.stargazers_count} Stars</li>`
              )
              .join("")}
          </ul>
        </div>
      </div>`;
};

// Call the GitHub API
Promise.all([
  fetch("https://api.github.com/users/r4deadv"),
  fetch("https://api.github.com/users/r4deadv/repos?sort=pushed"),
])
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )
  .then((data) => {
    console.log(data);
    render(data);
  })
  .catch((err) => console.warn(err));
