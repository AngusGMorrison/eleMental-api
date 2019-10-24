const models = require("../models");

index = function(req, res, next) {
  return models.Score.findTop10()
    .then(scores => res.json(scores));
}

create = function(req, res, next) {
  return models.Score.create({
    initials: req.body.initials,
    score: Number(req.body.score)
  }).then(() => {
    return models.Score.findTop10()
  }).then(scores => {
    res.json(scores);
  });
}

module.exports = {
  index, create
}