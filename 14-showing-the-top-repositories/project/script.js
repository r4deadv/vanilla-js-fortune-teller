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
  const sorted = repos.sort(
    (repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count
  );
  const firstFive = sorted.slice(0, 5);

  // Render the UI
  github.innerHTML = `<div class="gh-grid">
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
            ${firstFive
              .map(function (repo) {
                return `<li><a href="${repo.html_url}">${repo.name}</a> - ${repo.stargazers_count} Stars</li>`;
              })
              .join("")}
          </ul>
        </div>
      </div>`;
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
