'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Books.hasMany(models.Book_lists_books,{
        foreignKey: 'book_id'
      });
      Books.hasMany(models.Book_authors,{
        foreignKey: 'author_id'
      });
    }
  }
  Books.init({
    title: DataTypes.STRING,
    isbn10: DataTypes.INTEGER,
    isbn13: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};