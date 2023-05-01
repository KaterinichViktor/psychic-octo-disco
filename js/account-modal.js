(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-account-open]"),
      closeModalBtn: document.querySelector("[data-modal-account-close]"),
      modal: document.querySelector("[data-modal-account]"),
      modalWindow: document.querySelector("#modal-add-account"),
      
      // modalBank: document.querySelector("#modal-banc-sync"),
      // modalManual: document.querySelector("#modal-manual-input")
    };
  
    refs.openModalBtn.addEventListener("click", openModal);
    refs.closeModalBtn.addEventListener("click", closeModal);
  
    function openModal() {
      refs.modal.classList.remove("is-hidden");
      // refs.modalBank.classList.add("bank-hidden");
      // refs.modalManual.classList.add("manual-hidden");
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

