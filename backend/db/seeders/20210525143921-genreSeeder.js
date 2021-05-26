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
    return queryInterface.bulkInsert("Genres", [
      {
        name: "Alternative",
      },
      {
        name: "Ambient",
      },
      {
        name: "Blues",
      },
      {
        name: "Classical",
      },
      {
        name: "Country",
      },
      {
        name: "Dance",
      },
      {
        name: "EDM",
      },
      {
        name: "Electronic",
      },
      {
        name: "Hip-hop",
      },
      {
        name: "Indie Rock",
      },
      {
        name: "Instrumental",
      },
      {
        name: "Jazz",
      },
      {
        name: "Metal",
      },
      {
        name: "New Age",
      },
      {
        name: "Pop",
      },
      {
        name: "Progressive",
      },
      {
        name: "R&B/Soul",
      },
      {
        name: "Rap",
      },
      {
        name: "Reggae",
      },
      {
        name: "Rock",
      },
      {
        name: "Soundtrack",
      },
      {
        name: "World",
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
        'ALTER SEQUENCE "Genres_id_seq" RESTART WITH 1;'
      );
    return queryInterface.bulkDelete("Genres", null, {});
  },
};
