// Get the button and dropdown menu
const button = document.getElementById("x-11");
const menu = document.getElementById("color-picker-dropdown");

// Add an event listener to the button to show the dropdown menu
button.addEventListener("click", function() {
  menu.classList.toggle("show");
});

// Add an event listener to the document to hide the dropdown menu when clicked outside
document.addEventListener("click", function(event) {
  // Check if the click happened outside the dropdown menu
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("show");
  }
});