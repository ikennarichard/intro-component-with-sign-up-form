// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = [...document.querySelectorAll('.needs-validation')]

    const inputs = [...document.querySelectorAll('input')];
  
    // Loop over them and prevent submission
    forms
      .forEach(function (form, i) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            for (i = 0; i < inputs.length; i++) {
            inputs[i].style.border = '2px solid var(--red)'
            inputs[i].style.color = "var(--red)"
            }
            
            event.preventDefault()
            event.stopPropagation()

          
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()