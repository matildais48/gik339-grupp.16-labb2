const userbox = document.getElementById('userBox');

fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((users) => {
    const userList = document.createElement('ul');
    
  
    users.forEach((user) => {
      const list = document.createElement('li');
      list.style.color = user.color; 
      list.textContent = `${user.firstName} ${user.lastName} (${user.username})`; // Lägg till namn och användarnamn
      userList.appendChild(list); 
    });

    userBox.appendChild(userList);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });
