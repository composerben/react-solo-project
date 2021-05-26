"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Albums", [
      {
        name: "Short Demos",
        albumCover: "backend/assets/images/Ben_B&W Smallest.jpg",
        releaseDate: 2021,
        genreId: 21,
        userId: 2,
      },
      {
        name: "Orchestral Selections",
        albumCover: "backend/assets/images/DSC_8169_01.jpg",
        releaseDate: 2020,
        genreId: 4,
        userId: 2,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Albums", null, {});
  },
};
