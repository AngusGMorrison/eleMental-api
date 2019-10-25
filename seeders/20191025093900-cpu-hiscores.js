'use strict';
const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Scores", [
    {
      id: "13f9d387-8d02-4edd-a1f0-b61d8604d772",
      initials: "P01",
      score: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: "27439394-3012-4788-bb5a-1abdcb17f7ba",
      initials: "P02",
      score: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: "9353bb44-b7d4-4307-a462-295a9eecb407",
      initials: "P03",
      score: 300,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: "627b5e30-800a-4c15-9bed-2f41f7ec27e7",
      initials: "P04",
      score: 400,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: "f38d8478-7273-4a53-866a-62cdd85b0c77",
      initials: "P05",
      score: 500,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: "9c8daf57-24e3-4a2a-bf5a-2a51e9259122",
      initials: "P06",
      score: 600,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: "4f83308b-28d1-4457-a57c-c1618d2fa66f",
      initials: "P07",
      score: 700,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: "34a977f3-80b3-4e54-b28f-4b4dc4430720",
      initials: "ANGUS",
      score: 900,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: "63f11212-9610-4c74-b20c-33fbb7be17e4",
      initials: "CHRIS",
      score: 1100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: "98da4816-e321-4da7-bf6e-79811c0ea09d",
      initials: "MIKE",
      score: 1300,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Scores", null, {});
  }
};
