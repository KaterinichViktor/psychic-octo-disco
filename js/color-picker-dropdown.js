// // Get the button and dropdown menu
// const button = document.getElementById("x-11");
// const menu = document.getElementById("color-picker-dropdown");
// const coloredDiv = document.getElementById("color-example");
// const radioButtons = document.getElementsByName("color");
// let selectedColor = "";

// // Choose a random index
// const randomIndex = Math.floor(Math.random() * radioButtons.length);

// // Check the radio button at the random index
// radioButtons[randomIndex].checked = true;

// // Set the selectedColor to the randomly chosen color by default
// selectedColor = radioButtons[randomIndex].value;

// // Set the background color of the coloredDiv to the selected color
// coloredDiv.style.backgroundColor = selectedColor;

// // Add an event listener to the button to show the dropdown menu
// button.addEventListener("click", function() {
//   menu.classList.toggle("show");
// });

// // Add event listeners to the radio buttons to update the selected color and coloredDiv background color
// radioButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     menu.classList.remove("show");
//     selectedColor = button.value;
//     coloredDiv.style.backgroundColor = selectedColor;
//   });
// });

// // Add an event listener to the document to hide the dropdown menu when clicked outside
// document.addEventListener("click", function(event) {
//   // Check if the click happened outside the dropdown menu
//   if (!menu.contains(event.target) && !button.contains(event.target)) {
//     menu.classList.remove("show");
//   }
// });



// Get the form, button, dropdown menu, coloredDiv, and radio buttons
const form = document.querySelector(".type-88");
const button = document.getElementById("x-11");
const menu = document.getElementById("color-picker-dropdown");
const coloredDiv = document.getElementById("color-example");
const radioButtons = document.getElementsByName("color");
let selectedColor = "";

// Choose a random index
const randomIndex = Math.floor(Math.random() * radioButtons.length);

// Check the radio button at the random index
radioButtons[randomIndex].checked = true;

// Set the selectedColor to the randomly chosen color by default
selectedColor = radioButtons[randomIndex].value;

// Set the background color of the coloredDiv to the selected color
coloredDiv.style.backgroundColor = selectedColor;

// Add an event listener to the button to show the dropdown menu
button.addEventListener("click", function() {
  menu.classList.toggle("show");
});

// Add event listeners to the radio buttons to update the selected color and coloredDiv background color
radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    menu.classList.remove("show");
    selectedColor = button.value;
    coloredDiv.style.backgroundColor = selectedColor;
  });
});

// Add an event listener to the document to hide the dropdown menu when clicked outside
document.addEventListener("click", function(event) {
  // Check if the click happened outside the dropdown menu
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("show");
  }
});