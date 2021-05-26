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
    return queryInterface.bulkInsert("Songs", [
      {
        name: "Sci-fi Demo",
        audioFile:
          "https://aa-react-solo-project.s3-us-west-2.amazonaws.com/Sci-Fi_Demo_Master.wav",
        userId: 2,
        trackNumber: 1,
        albumId: 1,
      },
      {
        name: "Cyber Sharks Gameplay",
        audioFile:
          "https://aa-react-solo-project.s3-us-west-2.amazonaws.com/Cyber+Sharks+Gameplay.wav",
        userId: 2,
        trackNumber: 2,
        albumId: 1,
      },
      {
        name: "Short, Sweet, and Also an Elephant",
        audioFile:
          "https://aa-react-solo-project.s3-us-west-2.amazonaws.com/Short%2C+Sweet%2C+and+Also+an+Elephant_Master.wav",
        userId: 2,
        trackNumber: 3,
        albumId: 1,
      },
      {
        name: "Underwater Fantasy",
        audioFile:
          "https://aa-react-solo-project.s3-us-west-2.amazonaws.com/Underwater+Fantasy+Demo+.wav",
        userId: 2,
        trackNumber: 4,
        albumId: 1,
      },
      {
        name: "Son of Adventure: the Movie",
        audioFile:
          "https://aa-react-solo-project.s3-us-west-2.amazonaws.com/Son+of+Adventure%3B+the+Movie.wav",
        userId: 2,
        trackNumber: 1,
        albumId: 2,
      },
      {
        name: "Fight or Flight",
        audioFile:
          "https://aa-react-solo-project.s3-us-west-2.amazonaws.com/Fight+or+Flight.mp3",
        userId: 2,
        trackNumber: 2,
        albumId: 2,
      },
      {
        name: "Yeahbah Ad",
        audioFile:
          "https://aa-react-solo-project.s3-us-west-2.amazonaws.com/Yeahbah_MX_Orchestral_v1.wav",
        userId: 2,
        trackNumber: 3,
        albumId: 2,
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
      'ALTER SEQUENCE "Songs_id_seq" RESTART WITH 1;'
    );
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
