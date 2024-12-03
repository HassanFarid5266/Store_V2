document
  .querySelector('[data-toggle="menu"]')
  .addEventListener("click", function (event) {
    const menu = document.querySelector('[data-content="menu"]');
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block"; // Show the menu
    } else {
      menu.style.display = "none"; // Hide the menu
    }
    event.stopPropagation();
  });

document.addEventListener("click", function (event) {
  const menu = document.querySelector('[data-content="menu"]');
  if (menu.style.display === "block") {
    menu.style.display = "none"; // Hide the menu
  }
});

document
  .querySelector('[data-content="menu"]')
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });
