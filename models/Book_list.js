const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Book_list = db.define('book_list', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING
    },
    public: true
})

module.exports = Book_list;