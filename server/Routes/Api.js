const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost/cherryDb');

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

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const userLogin = (email, password) => {
  const query = `SELECT * FROM user 
                WHERE email='${email}' 
                AND password='${password}' `;
  return sequelize.query(query);
};

const IsEmailValid = (email) => {
  const query = `SELECT * FROM user
                WHERE email='${email}'`;
  return sequelize.query(query).then((res) => res[0][0]);
};

const userRegister = (name, email, password) => {
  const rndNum = Math.floor(Math.random() * (20 - 1 + 1) + 1);
  const query = `INSERT INTO user (name,email,password,img)
  VALUES('${name}','${email}','${password}','https://robohash.org/${rndNum}'
  )`;
  return sequelize.query(query);
};

const getUserById = (id) => {
  const query = `SELECT * from user 
                  WHERE id='${id}'`;
  return sequelize.query(query);
};

const postFoodPost = (postData) => {
  const {
    userId,
    postType,
    mealOrigin,
    mealName,
    mealDate,
    mealTime,
    allergies,
    kosher,
    distribution,
    locationLat,
    locationLng,
  } = postData;
  const query = `INSERT INTO post 
                   VALUES(
                       null,
                       ${userId},
                       '${postType}',
                       '${mealOrigin}',
                       '${mealName}',
                       '${mealDate}' ,
                       '${mealTime}',
                       '${allergies}',
                       ${kosher},
                       '${distribution}',
                       0,
                       ${locationLat},
                       ${locationLng})`;
  return sequelize.query(query);
};

const getPostById = (id) => {
  const query = `SELECT * from post 
                  WHERE id='${id}'`;
  return sequelize.query(query);
};

const getAllPosts = () => {
  const query = `SELECT * from post`;
  return sequelize.query(query);
};

// const postFoodReview = (review) => {};

// const getUserRating = (id) => {};

router.get('/user/:email/:password', async (req, res) => {
  const { email, password } = req.params;

  const isEmail = await IsEmailValid(email);

  if (isEmail) {
    let user = await userLogin(email, password);
    user = user[0][0];
    user ? res.send(user) : res.status(401).send('check your password');
  } else {
    res.status(404).send('email not found');
  }
});

router.post('/user', async (req, res) => {
  const { name, email, password } = req.body;
  const isEmail = await IsEmailValid(email);
  if (isEmail) {
    res.status(409).send('email is taken');
  } else {
    const userId = await userRegister(name, email, password);
    const user = await getUserById(userId);
    res.send(user);
  }
});

router.post('/foodPost', async (req, res) => {
  const postData = req.body;
  const postId = await postFoodPost(postData);
  const post = await getPostById(postId);
  res.send(post);
});

router.get('/foodPost', async (req, res) => {
  const posts = await getAllPosts();
  res.send(posts);
});

router.get('/foodPost', async (req, res) => {
  const posts = await getAllPosts();
  res.send(posts);
});

module.exports = router;
