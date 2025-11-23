const { Sequelize } = require('sequelize');
const path = require('path');

// Initialize Sequelize with SQLite
// Use /tmp for write permissions in restricted sandbox environments if necessary
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/tmp/database.sqlite',
  logging: console.log,
});

module.exports = sequelize;
