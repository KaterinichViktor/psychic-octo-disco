const inputText = document.querySelector("#txt");
const myButton = document.querySelector(".add-list-item");
const list = document.querySelector(".list-test");
myButton.addEventListener("click", (e)=>{
    if(inputText.value !=""){
        e.preventDefault();
        // create li
        const myLi = document.createElement("li");
        myLi.innerText = inputText.value;
        list.appendChild(myLi);
        // 
        const mySpan = document.createElement("span");
        mySpan.innerText = "x";
        myLi.appendChild(mySpan);
    }
    const close = document.querySelectorAll("span");
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.display = 'none';
            close[i].parentElement.remove();
        })

    }
    inputText.value = "";
});