const models = require("../models");

exports.index = function(req, res, next) {
  res.render("index", { title: "Hiscores" });
}

exports.create = function(req, res, next) {
  return models.Score.create({
    initials: req.body.initials,
    score: req.body.score
  }).then(score => {
    res.json(score);
  });
}