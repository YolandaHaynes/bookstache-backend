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
      Books.belongsToMany(models.Book_lists, {
        foreignKey: 'book_id',
        through: "Book_list_books"
      });
      Books.belongsToMany(models.Authors, {
        foreignKey: 'author_id',
        through: "Book_authors"
      });
    }
  }
  Books.init({
    title: DataTypes.STRING,
    isbn10: DataTypes.STRING(13),
    isbn13: DataTypes.STRING(17),
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};