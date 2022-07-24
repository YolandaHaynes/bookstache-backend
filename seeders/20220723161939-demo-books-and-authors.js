'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const book = await queryInterface.bulkInsert('Books', [{
      title: "The Goodnight Train",
      isbn10: "547718985",
      isbn13: "9780547718989",
      description: "A child's bedtime ritual follows the imaginary journey of the Goodnight Train's trip to the dreamland station. On board pages.",
    }], {});
    const author = await queryInterface.bulkInsert('Authors', [{
      name: "June Sobel"
    }], {});

    const bookAuthor = await queryInterface.bulkInsert('Book_authors', [{
      book_id: book,
      author_id: author
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Authors', null, {}).then(()=>{
      console.log('bye Authors')
     })
     await queryInterface.bulkDelete('Books', null, {}).then(()=>{
      console.log('bye Books')
     })
     await queryInterface.bulkDelete('Book_authors', null, {}).then(()=>{
      console.log('bye Book_authors')
     })
  }
};
