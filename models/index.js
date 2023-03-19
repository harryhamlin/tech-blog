const Comment = require(`./Comment`);
const Content = require(`./Content`);
const User = require(`./User`);

Content.belongsTo(User, {
    foreignKey: `user_id`
    
})

User.hasMany(Content, {
    foreignKey: `user_id`,
    onDelete: 'SET NULL',
    onUpdate:'SET NULL'
})

Comment.belongsTo(Content, {
    foreignKey: `content_id`,
    onDelete: 'SET NULL',
    onUpdate:'SET NULL'
})

Content.hasMany(Comment, {
    foreignKey: `content_id`,
    onDelete: 'SET NULL',
    onUpdate:'SET NULL'
})

Comment.belongsTo(User, {
    foreignKey: `user_id`,
    onDelete: 'SET NULL',
    onUpdate:'SET NULL'
})

User.hasMany(Comment, {
    foreignKey: `user_id`,
    onDelete: 'SET NULL',
    onUpdate:'SET NULL'
})

module.exports = {
    Content,
    User,
    Comment
}