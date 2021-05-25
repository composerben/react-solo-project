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
        albumCover:
          "https://www.dropbox.com/s/ise7kp3fl01u7t3/Ben_B%26W%20Small%20.jpg",
        releaseDate: 2021,
        genreId: 21,
        userId: 2,
      },
      {
        name: "Orchestral Selections",
        albumCover: "https://www.dropbox.com/s/0k28i6r3scenoh1/DSC_8164_01.jpg",
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
