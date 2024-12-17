

// fetch('https://localhost:3000/users')
//     .then((response) => response.json())
//     .then((users) => {
//         const html = `<p>${users[0].firstname}</p>`;
//         document.body.insertAdjacentHTML('beforeend', html);
//     });

fetch("https://localhost:3000/users")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });