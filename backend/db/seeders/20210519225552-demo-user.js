"use strict";

const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          biography: "Demo Biography",
        },
        {
          email: "zygbigadoraloo@gmail.com",
          username: "Composerben",
          hashedPassword: bcrypt.hashSync("password"),
          biography: "Media/Concert composer from Seattle, WA",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      'ALTER SEQUENCE "Users_id_seq" RESTART WITH 1;'
    );
    return queryInterface.bulkDelete("Users", null, {});
  },
};
