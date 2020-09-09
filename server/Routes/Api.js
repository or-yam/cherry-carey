const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const sqlQueries = require('./sqlQueries');
const queries = new sqlQueries();
require('dotenv').config();
//DELETE BEFORE PUBLISHING>>>>>>
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  next();
});
//DELETE BEFORE PUBLISHING<<<<<<

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_ADDRESS,
    pass: process.env.MAIL_PASSWORD,
  },
  debug: false,
  logger: true,
});

router.get('/user/:email/:password', async (req, res) => {
  const { email, password } = req.params;

  const isEmail = await queries.IsEmailValid(email);

  if (isEmail) {
    let user = await queries.userLogin(email, password);
    user = user[0][0];
    user
      ? res.status(202).send(user)
      : res.status(401).send('check your password');
  } else {
    res.status(404).send('email not found');
  }
});

router.post('/user', async (req, res) => {
  const { name, email, password } = req.body;
  const isEmail = await queries.IsEmailValid(email);
  if (isEmail) {
    res.status(409).send('email is taken');
  } else {
    const userId = await queries.userRegister(name, email, password);
    const user = await queries.getUserById(userId);
    res.status(201).send(user);
  }
});

router.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await queries.getUserById(id);
  res.send(user[0][0]);
});

router.post('/foodPost', async (req, res) => {
  const postData = req.body;
  const postId = await queries.postFoodPost(postData);
  const post = await queries.getPostById(postId);
  res.send(post[0][0]);
});

router.get('/foodPost', async (req, res) => {
  const posts = await queries.getAllPosts();
  res.send(posts);
});

router.put('/foodPost', async (req, res) => {
  const postData = req.body;
  console.log(postData);
  await queries.upDatePostStatus(postData.id);
  res.send('updated');

  let mailToGeneratedBy = {
    from: process.env.MAIL_ADDRESS,
    to: postData.generatedBy.email,
    subject: 'order confirmation',
    text: `${postData.activeUser.name} has confirmed you request for ${postData.postType} a ${postData.mealName} at ${postData.date} ${postData.mealTime} please make contact at ${postData.activeUser.email} `,
  };

  let mailToActiveUser = {
    from: process.env.MAIL_ADDRESS,
    to: postData.activeUser.email,
    subject: 'order confirmation',
    text: `Thank you ${postData.activeUser.name} for ordering from us. Please contact ${postData.generatedBy.name} at ${postData.generatedBy.email} `,
  };

  transporter.sendMail(mailToGeneratedBy, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

  transporter.sendMail(mailToActiveUser, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
});

module.exports = router;
