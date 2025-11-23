const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Prompt = sequelize.define('Prompt', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  upvotes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  downvotes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  timestamps: true,
});

module.exports = Prompt;
