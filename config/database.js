const Sequelize = require('sequelize');

module.exports =  new Sequelize(process.env.DBDatabase, process.env.DBUsername, process.env.DBPassword, {
  host: process.env.DBHost,
  dialect: process.env.Dialect,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});