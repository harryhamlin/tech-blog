// un date
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { User } = require(`./index`);


class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_body: {
            type: DataTypes.TEXT,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: `user`,
                key: `id`
            }
        },
        content_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: `content`,
                key: `id`
            }
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        // hooks: {
        //     beforeCreate: async (newUserData) => {
        //         const commentUser = await User.findByPk(newUserData.user_id);
        //         newUserData.user_name = commentUser.name
        //         return newUserData
        //     },
        //     beforeUpdate: async (newUserData) => {
        //         const commentUser = await User.findByPk(newUserData.user_id);
        //         newUserData.user_name = commentUser.name
        //         return newUserData
        //     },
        // },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: `comment`
    }
);

module.exports = Comment;