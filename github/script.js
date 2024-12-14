// API URL
const apiURL = "https://api.github.com/users";

// Select container
const usersContainer = document.getElementById("users-container");

// Fetch data from GitHub API
async function fetchGitHubUsers() {
  try {
    const response = await fetch(apiURL); // Fetch data from API
    const users = await response.json(); // Convert to JSON

    // Display users dynamically
    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      userCard.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}" />
        <h2>${user.login}</h2>
        <a href="${user.html_url}" target="_blank">View Profile</a>
      `;
      usersContainer.appendChild(userCard);
    });
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    usersContainer.innerHTML = `<p>Failed to load users. Please try again later.</p>`;
  }
}

// Call the function
fetchGitHubUsers();
