const models = require("../models");

index = function(req, res, next) {
  return models.Score.findAll({ limit: 10, order: [["score", "DESC"]] })
    .then(scores => res.json(scores));
}

create = function(req, res, next) {
  return models.Score.create({
    initials: req.body.initials,
    score: Number(req.body.score)
  }).then(() => {
    return models.Score.findAll({ limit: 10, order: [["score", "DESC"]] })
  }).then(data => {
    res.json(data);
  });
}

module.exports = {
  index, create
}