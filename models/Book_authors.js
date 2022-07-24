'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book_authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Book_authors.hasMany(models.Books,{
      //   foreignKey: 'book_id'
      // }),
      // Book_authors.hasMany(models.Authors,{
      //   foreignKey: 'author_id'
      // })
    }
  }
  Book_authors.init({
    book_id: DataTypes.STRING,
    author_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book_authors',
  });
  return Book_authors;
};