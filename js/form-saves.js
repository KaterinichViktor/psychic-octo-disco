// const form = document.querySelector('#myForm');
      
//       // Listen for changes to the form and save the data to local storage
//       form.addEventListener('change', (event) => {
//         localStorage.setItem(event.target.id, event.target.value);
//       });
      
//       // When the page loads, populate the form with any saved data
//       window.addEventListener('load', () => {
//         const inputs = form.querySelectorAll('input');
        
//         for (let i = 0; i < inputs.length; i++) {
//           const value = localStorage.getItem(inputs[i].id);
          
//           if (value) {
//             inputs[i].value = value;
//           }
//         }
//       });