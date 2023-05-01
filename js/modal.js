// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//       modalWindow: document.querySelector("#modal-add-record")
//     };
  
//     refs.openModalBtn.addEventListener("click", openModal);
//     refs.closeModalBtn.addEventListener("click", closeModal);
  
//     function openModal() {
//       refs.modal.classList.remove("is-hidden");
//     }
//     function closeModal() {
//       refs.modal.classList.add("is-hidden");
//     }
//     document.addEventListener("mousedown", function(event) {
//       if (!refs.modalWindow.contains(event.target) && !refs.openModalBtn.contains(event.target)) {
//         refs.modal.classList.add("is-hidden");
//       }
//     });

    
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalWindow: document.querySelector("#modal-add-record")
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    refs.modal.classList.remove("is-hidden");
  }
  function closeModal() {
    refs.modal.classList.add("is-hidden");
  }
  document.addEventListener("mousedown", function(event) {
    if (event.button === 0 && !refs.modalWindow.contains(event.target) && !refs.openModalBtn.contains(event.target)) {
      refs.modal.classList.add("is-hidden");
    }
  });
})();

