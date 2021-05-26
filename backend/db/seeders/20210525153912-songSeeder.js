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
        audioFile: "backend/assets/audio/Sci-Fi_Demo_Master.wav",
        userId: 2,
        trackNumber: 1,
        albumId: 1,
      },
      {
        name: "Cyber Sharks Gameplay",
        audioFile: "backend/assets/audio/Cyber Sharks Gameplay.wav",
        userId: 2,
        trackNumber: 2,
        albumId: 1,
      },
      {
        name: "Short, Sweet, and Also an Elephant",
        audioFile:
          "backend/assets/audio/Short, Sweet, and Also an Elephant_Master.wav",
        userId: 2,
        trackNumber: 3,
        albumId: 1,
      },
      {
        name: "Underwater Fantasy",
        audioFile: "backend/assets/audio/Underwater Fantasy Demo .wav",
        userId: 2,
        trackNumber: 4,
        albumId: 1,
      },
      {
        name: "Son of Adventure: the Movie",
        audioFile: "backend/assets/audio/Son of Adventure; the Movie.wav",
        userId: 2,
        trackNumber: 1,
        albumId: 2,
      },
      {
        name: "Fight or Flight",
        audioFile: "backend/assets/audio/Fight or Flight.mp3",
        userId: 2,
        trackNumber: 2,
        albumId: 2,
      },
      {
        name: "Yeahbah Ad",
        audioFile: "backend/assets/audio/Yeahbah_MX_Orchestral_v1.wav",
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
  },
};
