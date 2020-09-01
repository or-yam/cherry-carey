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
  const query = `SELECT * from user 
                WHERE email='${email}' 
                AND password='${password}' `;
  return sequelize.query(query);
};

router.get('/user/:email/:password', async (req, res) => {
  const { email, password } = req.params;
  const user = await userLogin(email, password);
  res.send(user);
});

module.exports = router;
