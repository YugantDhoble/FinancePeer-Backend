const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('./User');

const Details = db.define('details', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    }
});

Details.belongsTo(User, {as: 'user'}); 

Details.sync().then(() => {
  console.log('Details table created');
});

module.exports = Details;