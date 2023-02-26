const { Content } = require(`../models`);

const contentData = [
    {
      content_body: `test 1`,
      user_id: 1
    },
    {
      content_body: `test 2`,
      user_id: 2
    },
    {
      content_body: `test 3`,
      user_id: 3
    },
]

const seedContent = () => Content.bulkCreate(contentData);

module.exports = seedContent;