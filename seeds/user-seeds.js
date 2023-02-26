const { User } = require(`../models`);

const userData = [
    {
      name: `timmy`,
      email: `timmy@gmail.com`,
      password: `password1`
    },
    {
      name: `mrdobs`,
      email: `mrdobs@gmail.com`,
      password: `password2`
    },
    {
      name: `parmina`,
      email: `parmina@gmail.com`,
      password: `password3`
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;