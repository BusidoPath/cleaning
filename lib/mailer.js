const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'rudy.abernathy@ethereal.email',
    pass: 'F8XsSfXdZWkh1wBrm4'
  }
})

module.exports.transporter = transporter

const sendMail = (to, subject, html) => {
  const mailOptions = {
    from: 'rudy.abernathy@ethereal.email',
    to,
    subject,
    html
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return console.log(err)
    console.log('Email sent: ', info)
  })
}

module.exports.sendMail = sendMail

// return new Promise(async function (resolve, reject) {
//   const mailOptions = {
//     from: 'noreply@prokat-control.bizml.ru',
//     to,
//     subject,
//     html
//   }
//   await transporter.sendMail(mailOptions, function (err, html) {
//     if (err) {
//       return reject(err)
//     }
//     resolve(1)
//   })
// })
