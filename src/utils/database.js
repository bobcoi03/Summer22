const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loginDB', 'root', 'PASSWORD', {
	dialect: 'postgres',
	host: 'localhost',
});

module.exports = sequelize;
