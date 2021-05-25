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
          "https://www.dropbox.com/s/ypvwm1q7b3z5t68/Sci-Fi_Demo_Master.wav",
        userId: 2,
        trackNumber: 1,
        albumId: 1,
      },
      {
        name: "Cyber Sharks Gameplay",
        audioFile:
          "https://www.dropbox.com/s/8i8sxyv9bmqo5iq/Cyber%20Sharks%20Gameplay.wav",
        userId: 2,
        trackNumber: 2,
        albumId: 1,
      },
      {
        name: "Short, Sweet, and Also an Elephant",
        audioFile:
          "https://www.dropbox.com/s/g6wqbkcwl60e39e/Short%2C%20Sweet%2C%20and%20Also%20an%20Elephant_Master.wav",
        userId: 2,
        trackNumber: 3,
        albumId: 1,
      },
      {
        name: "Underwater Fantasy",
        audioFile:
          "https://www.dropbox.com/s/42yhzmja2hrt8as/Underwater%20Fantasy%20Demo%20.wav",
        userId: 2,
        trackNumber: 4,
        albumId: 1,
      },
      {
        name: "Son of Adventure: the Movie",
        audioFile:
          "https://www.dropbox.com/s/t69rsdiq3vbe2p2/Son%20of%20Adventure%3B%20the%20Movie.wav",
        userId: 2,
        trackNumber: 1,
        albumId: 2,
      },
      {
        name: "Fight or Flight",
        audioFile:
          "https://www.dropbox.com/s/gkyyu8v3izo7gih/Fight%20or%20Flight.mp3",
        userId: 2,
        trackNumber: 2,
        albumId: 2,
      },
      {
        name: "Yeahbah Ad",
        audioFile:
          "https://www.dropbox.com/s/szjc1qq9ttmunpo/Yeahbah_MX_Orchestral_v1.wav",
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
