const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Authors = db.define('authors', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING
    }
})

module.exports = Authors;