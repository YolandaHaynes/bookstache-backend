'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book_lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book_lists.belongsTo(models.Users, {
        foreignKey: 'created_by',
        onDelete: 'CASCADE'
      });
      Book_lists.belongsToMany(models.Book_list_permissions, {
        foreignKey: 'book_list_id',
        onDelete: 'CASCADE'
      });
      Book_lists.belongsToMany(models.Book_list_books, {
        foreignKey: 'book_list_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Book_lists.init({
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
    created_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book_lists'
  });
  return Book_lists;
};