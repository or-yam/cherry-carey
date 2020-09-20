const express = require('express');
const router = express.Router();
const nodeMailerTemplate = require('./nodeMailer');
const sqlQueries = require('./sqlQueries');
const queries = new sqlQueries();
require('dotenv').config();

router.get('/userEmail/:email', async (req, res) => {
  const { email } = req.params;
  const isEmail = await queries.IsEmailValid(email);
  res.send(isEmail);
});

router.get('/userById/:id', async (req, res) => {
  const { id } = req.params;
  const user = await queries.getUserById(id);
  res.send(user[0][0]);
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
    console.log(`user id is = ${userId}`);
    const user = await queries.getUserById(userId.splice(',')[0]);
    res.status(201).send(user);
  }
});

router.post('/fbUser', async (req, res) => {
  const userData = req.body;
  const isEmail = await queries.IsEmailValid(userData.email);

  if (!isEmail) {
    const userId = await queries.registerFb(userData);
    const user = await queries.getUserById(userId.splice(',')[0]);
    res.send(user);
  } else {
    let user = await queries.userLogin(userData.email, '');
    user = user[0][0];
    res.send(user);
  }
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
  await queries.upDatePostStatus(postData.id);
  const emailTemplate = new nodeMailerTemplate(postData);
  emailTemplate.sendAll();
  res.send('reservation made');
});

module.exports = router;
