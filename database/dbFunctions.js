const data = require('../../database/dummyUsers.json');

const addDummyUsers = () => {
  data.map(async (user) => {
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
addDummyUsers();
