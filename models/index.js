const Comment = require(`./Comment`);
const Content = require(`./Content`);
const User = require(`./User`);

Content.belongsTo(User, {
    foreignKey: `user_id`
})

User.hasMany(Content, {
    foreignKey: `user_id`
})

Comment.belongsTo(Content, {
    foreignKey: `content_id`
})

Content.hasMany(Comment, {
    foreignKey: `content_id`
})

Comment.belongsTo(User, {
    foreignKey: `user_id`
})

User.hasMany(Comment, {
    foreignKey: `user_id`
})

module.exports = {
    Content,
    User,
    Comment
}