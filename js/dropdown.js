// Get the button and dropdown menu
const buttonColor = document.getElementById("dropdown-btn");
const menuColor = document.getElementById("dropdown-menu");

// Add an event listener to the button to show the dropdown menu
buttonColor.addEventListener("click", function() {
  menuColor.classList.toggle("show");
});

// Add an event listener to the document to hide the dropdown menu when clicked outside
document.addEventListener("click", function(event) {
  // Check if the click happened outside the dropdown menu
  if (!menuColor.contains(event.target) && !buttonColor.contains(event.target)) {
    menuColor.classList.remove("show");
  }
});