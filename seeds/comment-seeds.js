const { Comment } = require(`../models`);

const commentData = [
    {
        body: `loved this`,
        user_id: 1,
        content_id: 1        
    },
    {
        body: `loved this`,
        user_id: 2,
        content_id: 2
        
    },
    {
        body: `loved this`,
        user_id: 3,
        content_id: 3
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;