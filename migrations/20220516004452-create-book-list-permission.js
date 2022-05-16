'use strict';
// const Users = require('../models/user');
// const book_list = require('../models/book_list');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Book_list_permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_list_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Book_lists',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Users',
          key: 'id'
        }
      },
      admin: {
        type: Sequelize.BOOLEAN
      },
      read: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('book_list_permissions');
  }
};