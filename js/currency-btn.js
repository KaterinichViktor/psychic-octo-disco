const selectBtn = document.getElementById('x-22');
const selectDropdown = document.querySelector('.currency-options-3');
let selectedOption = '';

selectBtn.addEventListener('click', () => {
  selectDropdown.classList.toggle("show");
  selectBtn.classList.toggle("show");
});


document.addEventListener('click', (event) => {
  if (!event.target.closest('.currency-options-3') && event.target !== selectBtn) {
    selectDropdown.classList.remove("show");
    selectBtn.classList.remove("show");
  }
});

selectDropdown.addEventListener('click', (event) => {
  const button = event.target.closest('li');
  if (button) {
    selectedOption = button.textContent;
    selectBtn.textContent = selectedOption;
    selectDropdown.classList.remove("show");
    selectBtn.classList.remove("show");
  }
});

// const selectBtn = document.getElementById('x-22');
// const selectDropdown = document.querySelector('.currency-options-3');
// const currencyText = document.getElementById('currency-id');
// let selectedOption = '';

// selectBtn.addEventListener('click', () => {
//   selectDropdown.classList.toggle("show");
//   selectBtn.classList.toggle("show");
// });

// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.currency-options-3') && event.target !== selectBtn) {
//     selectDropdown.classList.remove("show");
//     selectBtn.classList.remove("show");
//   }
// });

// selectDropdown.addEventListener('click', (event) => {
//   const button = event.target.closest('li');
//   if (button) {
//     selectedOption = button.textContent;
//     currencyText.textContent = selectedOption;
//     selectDropdown.classList.remove("show");
//     selectBtn.classList.remove("show");
//   }
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const selectBtn = document.getElementById('x-22');
//   const selectDropdown = document.querySelector('.currency-options-3');
//   const currencyText = document.getElementById('currency-id');
//   let selectedOption = '';

//   selectBtn.addEventListener('click', () => {
//     selectDropdown.classList.add("show");
//     selectBtn.classList.toggle("show");
//   });

//   document.addEventListener('click', (event) => {
//     if (!event.target.closest('.currency-options-3') && event.target !== selectBtn) {
//       selectDropdown.classList.remove("show");
//       selectBtn.classList.remove("show");
//     }
//   });

//   selectDropdown.addEventListener('click', (event) => {
//     const button = event.target.closest('li');
//     if (button) {
//       selectedOption = button.textContent;
//       currencyText.textContent = selectedOption;
//       selectDropdown.classList.remove("show");
//       selectBtn.classList.remove("show");
//     }
//   });
// });