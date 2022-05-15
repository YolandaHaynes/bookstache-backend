const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Book_lists_books = db.define('book_list_books', {
    book_list_id:{
        type: Sequelize.INTEGER
    },
    user_id:{
        type: Sequelize.INTEGER
    },
    admin: true,
    read: true
})

module.exports = Book_lists_books;