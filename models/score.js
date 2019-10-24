"use strict";
const score = (sequelize, DataTypes) => {
  const Score = sequelize.define("Score", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
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

  Score.findTop10 = () => Score.findAll({ limit: 10, order: [["score", "DESC"]] });

  return Score;
};

module.exports = score;