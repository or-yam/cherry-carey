const dummyUsers = require('./dummyUsers.json');
const dummyPosts = require('./dummyPosts.json');

const addDummyUsers = () => {
  dummyUsers.map(async (user) => {
    const query = `INSERT INTO user VALUES(
            '${user.id}',
            '${user.name}',
            '${user.email}',
            '${user.password}',
            '${user.img}'
        )`;
    const result = await sequelize.query(query);
    return result;
  });
};

const addDummyPosts = () => {
  dummyPosts.map((post) =>
    axios.post('http://localhost:4000/foodPost', post).then(
      (res) => {
        this.foodPosts.push(new Post(res.data));
      },
      (error) => {
        console.log(error);
      }
    )
  );
};
