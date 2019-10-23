const models = require("../models");

exports.index = function(req, res, next) {
  return models.Score.findAll({ limit: 10, order: [["score", "DESC"]] })
    .then(scores => res.json(scores));
}

exports.create = function(req, res, next) {
  return models.Score.create({
    initials: req.body.initials,
    score: Number(req.body.score)
  }).then(score => res.json(score))
}

exports.test = function(req, res, next) {
  res.render("index");
}