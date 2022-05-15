const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Book_lists_books = db.define('book_lists_books', {
    book_list_id:{
        type: Sequelize.INTEGER
    },
    book_id:{
        type: Sequelize.INTEGER
    },
    favorite: false
})

module.exports = Book_lists_books;