const express = require('express');
const router = express.Router();
const sqlQueries = require('./sqlQueries');
const queries = new sqlQueries();

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

router.post('/foodPost', async (req, res) => {
  const postData = req.body;
  console.log(postData);
  const postId = await queries.postFoodPost(postData);
  const post = await queries.getPostById(postId);
  res.send(post[0][0]);
});

router.get('/foodPost', async (req, res) => {
  const posts = await queries.getAllPosts();
  res.send(posts);
});

module.exports = router;
