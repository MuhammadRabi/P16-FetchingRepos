// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.addEventListener("click", getRepos);

function getRepos() {
  if (theInput.value == "") {
    // If Value Is Empty
    reposData.innerHTML = "<span>please enter a GitHub user name!</span>";
  } else {
    // fetching data
    fetch(`https://api.github.com/users/${theInput.value}/repos`).then(
      (response) =>
        response.json().then((repos) => {
          // empty repos container
          reposData.innerHTML = "";
          // looping on repositories
          repos.forEach((repo) => {
            // create Repo box
            repoBox = document.createElement("div");
            //create repo name
            repoBox.appendChild(document.createTextNode(repo.name));
            // create repo url anchor
            let repoUrl = document.createElement("a");
            repoUrl.appendChild(document.createTextNode(" visit"));
            // add repo link to div
            repoUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
            // open repo in a new tab
            repoUrl.setAttribute("target", "_blank");
            repoBox.appendChild(repoUrl);
            repoBox.className = "repo-box";
            // append repo box to the page
            reposData.appendChild(repoBox);
          });
        })
    );
  }
}
