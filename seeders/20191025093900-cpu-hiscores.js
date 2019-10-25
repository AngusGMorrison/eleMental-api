'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Scores", [
    {
      initials: "P01",
      score: 100
    }, {
      initials: "P02",
      score: 200
    }, {
      initials: "P03",
      score: 300
    }, {
      initials: "P04",
      score: 400
    }, {
      initials: "P05",
      score: 500
    }, {
      initials: "P06",
      score: 600
    }, {
      initials: "P07",
      score: 700
    }, {
      initials: "ANGUS",
      score: 900
    }, {
      initials: "CHRIS",
      score: 1100
    }, {
      initials: "MIKE",
      score: 1300
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Scores", null, {});
  }
};
