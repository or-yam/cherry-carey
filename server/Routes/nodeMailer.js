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

class nodeMailerTemplate {
  data = {};
  constructor(data) {
    this.data = data;
  }

  toGeneratedBy = {
    from: process.env.MAIL_ADDRESS,
    to: this.data.generatedBy.email,
    subject: 'order confirmation',
    text: `${this.data.activeUser.name} has confirmed your request 
            for ${this.data.postType} a ${this.data.mealName} 
            at ${this.data.date} ${this.data.mealTime} 
            please make contact at ${this.data.activeUser.email}`,
  };

  toActiveUser = {
    from: process.env.MAIL_ADDRESS,
    to: this.data.activeUser.email,
    subject: 'order confirmation',
    text: `Thank you ${this.data.activeUser.name} 
            for ordering from us. 
            Please contact ${this.data.generatedBy.name} 
            at ${this.data.generatedBy.email}`,
  };

  sendMail(recipient) {
    transporter.sendMail(recipient, (err, data) => {
      err ? console.log(err) : console.log(data);
    });
  }

  sendAll() {
    this.sendMail(this.toGeneratedBy);
    this.sendMail(this.toActiveUser);
  }
}

module.exports = nodeMailerTemplate;
