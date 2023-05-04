const selectBtn = document.getElementById('x-13');
const selectDropdown = document.querySelector('.type-options-12');
let selectedOption = '';

// Set the selected option to the first option
const firstOption = selectDropdown.querySelector('li');
selectedOption = firstOption.innerHTML;
selectBtn.innerHTML = selectedOption;

selectBtn.addEventListener('click', () => {
  selectDropdown.classList.toggle("show");
  selectBtn.classList.toggle("show");
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.type-options-12') && event.target !== selectBtn) {
    selectDropdown.classList.remove("show");
    selectBtn.classList.remove("show");
  }
});

selectDropdown.addEventListener('click', (event) => {
  const button = event.target.closest('li');
  if (button) {
    selectedOption = button.innerHTML;
    selectBtn.innerHTML = selectedOption;
    selectDropdown.classList.remove("show");
    selectBtn.classList.remove("show");
  }
});