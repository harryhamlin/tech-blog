const { Content } = require(`../models`);

const contentData = [
    {
      body: `test 1`,
      user_id: 1
    },
    {
      body: `test 2`,
      user_id: 2
    },
    {
      body: `test 3`,
      user_id: 3
    },
]

const seedContent = () => Content.bulkCreate(contentData);

module.exports = seedContent;