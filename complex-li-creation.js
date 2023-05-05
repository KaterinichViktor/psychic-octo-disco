
const formCreation = document.querySelector(".type-88");
const inputName  = document.getElementById("name-99");
const accountsList = document.querySelector(".accounts-list");
const lastItem = document.getElementById("lastItemBtn");
const typeBtn = document.getElementById("x-13");
const currencyBtn = document.getElementById("x-22");
const colorExample = document.getElementById("color-example");

const radioButtonsChecker = document.querySelectorAll('input[name="color"]');
let selectedColorChecker = colorExample.style.backgroundColor;

radioButtonsChecker.forEach(button => {
    button.addEventListener('change', () => {
        selectedColorChecker = button.value;
    });
});

const dropdownType = document.querySelector('.type-options-12 ul');
let selectedType = typeBtn.textContent;

dropdownType.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
      selectedType = item.textContent;
    });
});



const inputStartAmount = document.getElementById("number-66");

const dropdownCurrency = document.querySelector('.currency-options-3 ul');
let selectedCurrency = currencyBtn.textContent;

dropdownCurrency.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
      selectedCurrency = item.textContent;
    });
});

function createLi(selectedColorChecker, selectedType, selectedCurrency, inputName, inputStartAmount) {
    const li = document.createElement('li');
    li.style.backgroundColor = selectedColorChecker;
    const buttonCommon = document.createElement('button');
    buttonCommon.classList.add('button-account');
    const spanIcon = document.createElement('span');
    spanIcon.classList.add('account-icon');

    if (selectedType === 'General') {
        spanIcon.innerHTML = '<svg class="icon-account-type"<use href="./svg-sprite/symbol-defs.svg#icon-wallet-2"></use></svg>';
    } else if (selectedType === 'Cash') {
        spanIcon.innerHTML = '<svg class="icon-account-type"><use href="./svg-sprite/symbol-defs.svg#icon-dollar"></use></svg>';
    } else if (selectedType === 'Credit Card') {
        spanIcon.innerHTML = '<svg class="icon-account-type"><use href="./svg-sprite/symbol-defs.svg#icon-credit-card"></use></svg>';
    }

    buttonCommon.appendChild(spanIcon);
    const spanAll = document.createElement('span');
    const pType = document.createElement('p');
    pType.textContent = inputName.value;
    pType.classList.add('name-custom');
    const currencyBalance = document.createElement('h4');
    currencyBalance.classList.add('balance');
    const currency = document.createElement('span');
    currency.textContent = selectedCurrency + " ";
    const balance = document.createElement('span');
    balance.textContent = inputStartAmount.value;
    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('account-edit');
    buttonEdit.innerHTML = '<svg class="icon-edit"><use href="./svg-sprite/symbol-defs.svg#icon-pencil"></use></svg>'
      
    li.appendChild(buttonCommon);
    buttonCommon.appendChild(spanAll);
    spanAll.appendChild(pType);
    spanAll.appendChild(currencyBalance);
    currencyBalance.appendChild(currency);
    currencyBalance.appendChild(balance);
    li.appendChild(buttonEdit);
      
    return li;
}

formCreation.addEventListener('submit', (event) => {
    event.preventDefault();

    const li =  createLi(selectedColorChecker, selectedType, selectedCurrency, inputName, inputStartAmount);

    accountsList.insertBefore(li, lastItem);
    
});