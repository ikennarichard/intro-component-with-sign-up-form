
(function () {
    'use strict'
  
    const forms = [...document.querySelectorAll('.needs-validation')]


    forms
      .forEach(function (form) {
        form.reset()
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
          
        }, false)
      })
  })()