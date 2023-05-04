const myList = document.getElementById("myList");
const lastItem = document.getElementById("lastItem");
const myButton = document.querySelector(".btn-gpt-test");
const inputText = document.querySelector("#txt");

myButton.addEventListener("click", (e)=>{
  if(inputText.value !=""){
    e.preventDefault();
    const item = document.createElement("li");
    item.textContent = inputText.value;
    myList.insertBefore(item, lastItem);
  }
  inputText.value = "";
});


// aproved
// 
// 
{/* <li>

      <button type="button" class="button-account">

        <svg class="icon-cash">
          <use href="./svg-sprite/symbol-defs.svg#icon-dollar"></use>
        </svg>

        <span>
          <p class="cash">Cash</p>
          <h4 class="balance">UAH <span>222.0</span></h4>
        </span>

      </button>


      <button type="button" class="account-edit">

        <svg class="icon-edit">
          <use href="./svg-sprite/symbol-defs.svg#icon-pencil"></use>
        </svg>

      </button>

    </li> */}