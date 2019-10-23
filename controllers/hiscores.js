const models = require("../models");

exports.index = function(req, res, next) {
  return models.Score.findAll({ limit: 10, order: [["score", "DESC"]] })
    .then(scores => res.json(scores));
}

exports.create = function(req, res, next) {
  return models.Score.create({
    initials: req.body.initials,
    score: req.body.score
  })
  .then(score => res.json(score))
  .catch(console.error);
}

exports.test = function(req, res, next) {
  res.render("index");
}