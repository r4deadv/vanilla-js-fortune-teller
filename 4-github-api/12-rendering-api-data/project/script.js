let github = document.getElementById("github");

function render(data) {
  github.innerHTML = `
  <div class="gh-grid">
    <div class="gh-avatar">
      <p><img src="${data.avatar_url}" alt="profile picture"></p>
	  </div>
	  <div class="gh-details">
		  <p>
        <strong>${data.name}</strong><br>
        ${data.location}<br>
        <em><a href="${data.html_url}">${data.public_repos} public repos</a></em>
      </p>
	  </div>
  </div>
  `;
}

// Call the GitHub API
fetch("https://api.github.com/users/r4deadv")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    render(data);
  })
  .catch((error) => console.warn(error));
