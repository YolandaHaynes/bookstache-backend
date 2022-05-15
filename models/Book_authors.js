const { Sequelize } = require('sequelize');
const db = require('../config/database');

const Book_authors = db.define('book_authors', {
    book_id:{
        type: Sequelize.INTEGER
    },
    author_id:{
        type: Sequelize.INTEGER
    },
    favorite: false
})

module.exports = Book_authors;