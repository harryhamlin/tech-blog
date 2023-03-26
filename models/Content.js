// title contents un date
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Content extends Model { }

Content.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content_body: {
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
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: `content`
    }
)

module.exports = Content