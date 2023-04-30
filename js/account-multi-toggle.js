// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-bank-open]"),
//       closeModalBtn: document.querySelector("[data-modal-bank-close]"),
//       modal: document.querySelector("[data-modal-account]"),
//       modalWindow: document.querySelector("#modal-banc-sync"),
//       modalAccount: document.querySelector("#modal-add-account"),
//     };
  
//     refs.openModalBtn.addEventListener("click", openModal);
//     refs.closeModalBtn.addEventListener("click", closeModal);
  
//     function openModal() {
//       refs.modalAccount.classList.add("account-hidden")
//       refs.modalWindow.classList.remove("bank-hidden");
//     }
//     function closeModal() {
//       refs.modal.classList.add("is-hidden");
//     }
//     document.addEventListener("click", function(event) {
//       // Check if the click happened outside the dropdown menu
//       if (!refs.modalWindow.contains(event.target) && !refs.openModalBtn.contains(event.target)) {
//         refs.modal.classList.add("is-hidden");
//       }
//     });

    
//   })();