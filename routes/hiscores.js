var express = require("express");
var router = express.Router();

let hiscores = require("../controllers/hiscores");

router.get("/", hiscores.index);
router.post("/", hiscores.create);
router.get("/test", hiscores.test);


module.exports = router;