window.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.querySelector('#send')
  const retryButton = document.querySelector('#retry')
  const name = document.querySelector('#form-name')
  const phone = document.querySelector('#form-phone')
  const comment = document.querySelector('#form-comment')

  const formBlock = document.querySelector('#form-block')
  const successForm = document.querySelector('#success-form')
  const errorForm = document.querySelector('#error-form')

  const list = [name, phone, comment]

  list.forEach(el => {
    el.addEventListener('input', () => {
      if (el.classList.contains('error')) {
        el.classList.remove('error')
      }
    })
  })

  sendButton.addEventListener('click', async () => {
    let success = true
    list.forEach(el => {
      if (!el.value.trim()) {
        el.classList.add('error')
        success = false
      }
    })
    if (success) {
      const form = {
        name: name.value,
        phone: phone.value,
        comment: comment.value
      }
      try {
        const res = await axios.post('/sendform', { form })
        if (res.status === 201) {
          formBlock.style.display = 'none'
          successForm.style.display = 'block'
        }
      } catch (e) {
        formBlock.style.display = 'none'
        errorForm.style.display = 'block'
      }
    }
  })

  retryButton.addEventListener('click', () => {
    formBlock.style.display = 'block'
    errorForm.style.display = 'none'
    name.value = phone.value = comment.value = ''
  })
})
