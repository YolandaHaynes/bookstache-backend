const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Books = db.define('books', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title:{
        type: Sequelize.STRING
    },
    isbn10:{
        type: Sequelize.INTEGER,
        unique: true
    },
    isbn13:{
        type: Sequelize.INTEGER,
        unique: true
    },
    description:{
        type: Sequelize.STRING
    },
    image:{
        type: Sequelize.STRING
    }
})

module.exports = Books;