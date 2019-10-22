var express = require("express");
var router = express.Router();

const hiscores = require("../controllers/hiscores");

router.get("/hiscores", hiscores.index);


module.exports = router;