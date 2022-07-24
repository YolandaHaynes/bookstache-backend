'use strict';
const {
  Model
} = require('sequelize');
const Book_list_permission = require('./Book_list_permissions');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Book_lists,{
        foreignKey: 'created_by',
        onDelete: 'CASCADE'
      })
      // Users.hasMany(models.Book_list_permission,{
      //   foreignKey: 'user_id',
      //   onDelete: 'CASCADE'
      // })
    }
  }
  Users.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};