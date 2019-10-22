var express = require("express");
var router = express.Router();

let hiscores = require("../controllers/hiscores");

router.get("/", hiscores.index);


module.exports = router;