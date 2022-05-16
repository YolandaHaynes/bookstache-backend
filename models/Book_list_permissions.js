'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book_list_permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book_list_permissions.belongsToMany(models.Users,{
        foreignKey: 'user_id'
      });
      Book_list_permissions.belongsToMany(models.Book_lists,{
        foreignKey: 'book_list_id'
      })
    }
  }
  Book_list_permissions.init({
    book_list_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    admin: DataTypes.BOOLEAN,
    read: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Book_list_permissions',
  });
  return Book_list_permissions;
};