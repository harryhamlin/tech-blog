// un date
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        body: {
            type: DataTypes.TEXT,
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: `user`,
        //         key: `id`
        //     }
        // },
        content_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: `content`,
                key: `id`
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: `comment`
    }
);

module.exports = Comment;