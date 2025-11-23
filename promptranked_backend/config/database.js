const { Sequelize } = require('sequelize');
const path = require('path');

// Initialize Sequelize with SQLite
// Allow storage path to be configured via environment variable
const storagePath = process.env.DB_STORAGE || path.join(__dirname, '..', 'database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: storagePath,
  logging: console.log,
});

module.exports = sequelize;
