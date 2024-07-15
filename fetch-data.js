document.addEventListener('DOMContentLoaded', function () {
  async function fetchUserData() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      const dataContainer = document.getElementById('api-data');

      try {
          const response = await fetch(apiUrl);
          const users = await response.json();

          // Clear the loading message
          dataContainer.innerHTML = '';

          // Create a list to display user data
          const userList = document.createElement('ul');

          users.forEach(user => {
              const listItem = document.createElement('li');
              listItem.textContent = user.name;
              userList.appendChild(listItem);
          });

          // Append the list to the data container
          dataContainer.appendChild(userList);
      } catch (error) {
          // Handle errors by displaying an error message
          dataContainer.innerHTML = 'Failed to load user data.';
      }
  }

  fetchUserData();
});
