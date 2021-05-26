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
        albumCover: "/images/Ben_B&W_Smallest.jpg",
        releaseDate: 2021,
        genreId: 21,
        userId: 2,
      },
      {
        name: "Orchestral Selections",
        albumCover: "/images/DSC_8169_01.jpg",
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
    queryInterface.sequelize.query(
      'ALTER SEQUENCE "Albums_id_seq" RESTART WITH 1;'
    );
    return queryInterface.bulkDelete("Albums", null, {});
  },
};
