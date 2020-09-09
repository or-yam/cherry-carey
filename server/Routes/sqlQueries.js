const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost/cherryDb');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

class sqlQueries {
  userLogin(email, password) {
    const query = `SELECT * FROM user 
                        WHERE email='${email}' 
                        AND password='${password}' `;
    return sequelize.query(query);
  }

  IsEmailValid(email) {
    const query = `SELECT * FROM user
                    WHERE email='${email}'`;
    return sequelize.query(query).then((res) => res[0][0]);
  }

  userRegister(name, email, password) {
    const rndNum = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    const query = `INSERT INTO user (name,email,password,img)
      VALUES('${name}','${email}','${password}','https://robohash.org/${rndNum}'
      )`;
    return sequelize.query(query);
  }

  registerFb(user) {
    const query = `INSERT INTO user (name,email,password,img)
      VALUES('${user.name}','${user.email}','','${user.img}'
      )`;
    return sequelize.query(query);
  }

  getUserById(id) {
    const query = `SELECT id,name,email,img from user 
                      WHERE id=${id}`;
    return sequelize.query(query);
  }

  postFoodPost(postData) {
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
      price,
      mealImage,
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
                           ${locationLng},
                           ${parseInt(price)},
                           '${mealImage}')`;
    return sequelize.query(query);
  }

  getPostById(id) {
    const query = `SELECT * from post 
                      WHERE id='${id}'`;
    return sequelize.query(query);
  }

  getAllPosts() {
    const query = `SELECT * from post
                    WHERE post.status=0`;
    return sequelize.query(query);
  }

  upDatePostStatus(id) {
    const query = `UPDATE post
                    SET post.status=1
                    WHERE post.id=${id}`;
    return sequelize.query(query);
  }

  //  postFoodReview (review)  {};

  // const getUserRating (id)  {};
}
module.exports = sqlQueries;
