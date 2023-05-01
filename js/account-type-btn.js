// const selectBtn = document.querySelector('.select-btn');
// const selectDropdown = document.querySelector('.select-dropdown');
// let selectedOption = '';

// selectBtn.addEventListener('click', () => {
//   selectDropdown.style.display = selectDropdown.style.display === 'none' ? 'block' : 'none';
// });

// selectDropdown.addEventListener('click', (event) => {
//   const button = event.target.closest('button');
//   if (button) {
//     console.log(button.innerText); // do something with the selected option
//     selectedOption = button.innerText;
//     selectBtn.innerText = selectedOption;
//     selectDropdown.style.display = 'none';
//   }
// });

// document.addEventListener('click', (event) => {
//   if (!selectBtn.contains(event.target) && !selectDropdown.contains(event.target)) {
//     selectDropdown.style.display = 'none';
//   }
// });

const selectBtn = document.querySelector('.select-btn');
const selectDropdown = document.querySelector('.select-dropdown');
let selectedOption = '';

selectBtn.addEventListener('click', () => {
  selectDropdown.style.display = selectDropdown.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.select-dropdown') && event.target !== selectBtn) {
    selectDropdown.style.display = 'none';
  }
});

document.addEventListener('contextmenu', (event) => {
  if (!event.target.closest('.select-dropdown') && event.target !== selectBtn) {
    selectDropdown.style.display = 'none';
  }
});

selectDropdown.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button) {
    selectedOption = button.innerText;
    selectBtn.innerText = selectedOption;
    selectDropdown.style.display = 'none';
  }
});