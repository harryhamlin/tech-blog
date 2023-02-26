const seedComment = require('./comment-seeds');
const seedContent = require('./content-seeds');
const seedUser = require('./user-seeds');

const sequelize = require(`../config/connection`);

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedContent();
  console.log('\n----- CONTENT SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
