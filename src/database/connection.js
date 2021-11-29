const Sequelize = require('sequelize');

const { DB_HOST, DB_DIALECT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  operatorsAliases: false,

  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

connection.authenticate()

module.exports = connection;
