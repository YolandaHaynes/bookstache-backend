'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book_list_books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book_list_books.belongsToMany(models.Book_lists,{
        foreignKey: 'book_list_id'
      });
      //will add another association once model Books is created
      Book_list_books.belongsToMany(models.Books,{
        foreignKey: 'book_id'
      });
    }
  }
  Book_list_books.init({
    book_list_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    favorite: DataTypes.BOOLEAN,
    hidden: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Book_list_books',
  });
  return Book_list_books;
};