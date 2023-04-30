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
      if (!refs.modalWindow.contains(event.target) && !refs.openModalBtn.contains(event.target)) {
        refs.modal.classList.add("is-hidden");
      }
    });

    
  })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//     modalWindow: document.querySelector("#modal-add-record"),
//   };

//   refs.openModalBtn.addEventListener("click", openModal);
//   refs.closeModalBtn.addEventListener("click", closeModal);

//   function openModal() {
//     refs.modal.classList.remove("is-hidden");
//   }

//   function closeModal() {
//     refs.modal.classList.add("is-hidden");
//   }

//   let isDragging = false;

//   document.addEventListener("mousedown", function (event) {
//     // Check if the mousedown happened inside the modal
//     if (refs.modalWindow.contains(event.target)) {
//       isDragging = true;
//     }
//   });

//   document.addEventListener("mouseup", function (event) {
//     // Check if the mouseup happened outside the modal and the user was dragging
//     if (!refs.modalWindow.contains(event.target) && isDragging) {
//       refs.modal.classList.add("is-hidden");
//     }
//     isDragging = false;
//   });
// })();

