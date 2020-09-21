const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodeMailerTemplate = require('./nodeMailer');
const sqlQueries = require('./sqlQueries');
const queries = new sqlQueries();
require('dotenv').config();

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    res.status(401).send('authenticate err');
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.status(403).send('token is not valid');
    }
    req.user = user;
    next();
  });
}

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

router.get('/userByToken', authenticateToken, (req, res) => {
  const user = req.user;
  res.send(user);
});

router.post('/user/:email/:password', async (req, res) => {
  const { email, password } = req.params;
  const isEmail = await queries.IsEmailValid(email);
  if (isEmail) {
    let user = await queries.userLogin(email, password);
    user = user[0][0];
    if (user) {
      const accessToken = jwt.sign(
        JSON.stringify(user),
        process.env.ACCESS_TOKEN_SECRET
      );
      res.status(202).json(accessToken);
    } else {
      res.status(401).send('check your password');
    }
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

    const accessToken = jwt.sign(
      JSON.stringify(user),
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(202).json(accessToken);
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
