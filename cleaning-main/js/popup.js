window.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.popup-overlay')
  const button= document.querySelectorAll('.button')
  const close = document.querySelectorAll('.close-popup')

  const formBlock = document.querySelector('#form-block')
  const successForm = document.querySelector('#success-form')
  const errorForm = document.querySelector('#error-form')

  const name = document.querySelector('#form-name')
  const phone = document.querySelector('#form-phone')
  const comment = document.querySelector('#form-comment')

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (event) {
      event.preventDefault()
      popup.classList.remove("hidden")
    })
  }
  const closePopup = () => {
    popup.classList.add('hidden')
    formBlock.style.display = 'block'
    successForm.style.display = 'none'
    errorForm.style.display = 'none'

    name.value = phone.value = comment.value = ''
  }
  popup.addEventListener('click', function (event) {
    if (event.target === this) {
      closePopup()
    }
  })
  close.forEach(button => {
    button.addEventListener('click', closePopup)
  })
})
