const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
  debug: false,
  logger: true,
});

let mailOptions = {
  from: process.env.MAIL_ADDRESS,
  to: 'oryamne@gmail.com',
  subject: 'order confirmation',
  text: 'hello',
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
