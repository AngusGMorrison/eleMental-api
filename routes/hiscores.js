var express = require("express");
var router = express.Router();

const hiscores = require("../controllers/hiscores");

router.get("/", hiscores.index);
router.post("/", hiscores.create);


module.exports = router;