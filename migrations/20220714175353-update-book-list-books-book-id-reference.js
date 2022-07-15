'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Book_list_books', {
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
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Books',
          key: 'id'
        }
      },
      favorite: {
        type: Sequelize.BOOLEAN
      },
      hidden: {
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
    await queryInterface.dropTable('Book_list_books');
  }
};