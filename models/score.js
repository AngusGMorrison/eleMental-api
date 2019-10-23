"use strict";
module.exports = (sequelize, DataTypes) => {
  const Score = sequelize.define("Score", {
    initials: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 10]
      }
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Score;
}