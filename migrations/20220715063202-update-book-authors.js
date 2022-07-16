'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn('Book_authors', 'book_id', { 
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model: 'Books',
        key: 'id'
      },
    });
    await queryInterface.addColumn('Book_authors', 'author_id', { 
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model: 'Authors',
        key: 'id'
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
