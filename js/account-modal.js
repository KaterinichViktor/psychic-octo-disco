(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-account-open]"),
      closeModalBtn: document.querySelector("[data-modal-account-close]"),
      modal: document.querySelector("[data-modal-account]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }

    
  })();