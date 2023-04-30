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
    document.addEventListener("click", function(event) {
      // Check if the click happened outside the dropdown menu
      if (!refs.modalWindow.contains(event.target) && !refs.openModalBtn.contains(event.target)) {
        refs.modal.classList.add("is-hidden");
      }
    });

    
  })();

