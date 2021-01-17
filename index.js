const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const { sendMail } = require('./lib/mailer')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static(path.resolve(__dirname, 'frontend')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

app.post('/sendform', async (req, res) => {
  try {
    const html = `<b>Name: </b><span>${req.body.form.name}</span><br>
<b>Phone: </b><span>${req.body.form.phone}</span><br>
<b>Comment: </b><span>${req.body.form.comment}</span>`

    sendMail('vas11yev.work@ya.ru', 'Site', html)
    res.status(201).json({
      type: 'Success'
    })
  } catch (e) {
    res.json({
      type: 'Error'
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
})
