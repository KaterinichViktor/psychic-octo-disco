const selectBtnCurrency = document.querySelector('.currency-btn-x-22');
const selectDropdownCurrency = document.querySelector('.currency-options-3');
let selectedCurrencyOption = '';

// Set the default selected currency option to the first option
selectedCurrencyOption = selectDropdownCurrency.querySelector('li').textContent;
selectBtnCurrency.textContent = selectedCurrencyOption;


selectBtnCurrency.addEventListener('click', (event) => {
  event.stopPropagation()
  selectDropdownCurrency.classList.toggle("show");
  selectBtnCurrency.classList.toggle("show");
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.currency-options-3') && event.target !== selectBtnCurrency) {
    selectDropdownCurrency.classList.remove("show");
    selectBtnCurrency.classList.remove("show");
  }
});

selectDropdownCurrency.addEventListener('click', (event) => {
  const button = event.target.closest('li');
  if (button) {
    selectedCurrencyOption = button.textContent;
    selectBtnCurrency.textContent = selectedCurrencyOption;
    selectDropdownCurrency.classList.remove("show");
    selectBtnCurrency.classList.remove("show");
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