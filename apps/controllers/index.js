var express = require("express");

var router = express.Router();

router.use("/api", require(__dirname + "/api"));
router.use("/plugins", require(__dirname + "/plugins"));
router.use("/nodemailer", require(__dirname + "/nodemailer"));
router.use("/users", require(__dirname + "/users"));
router.use("/customers", require(__dirname + "/customers"));

router.get("/", function (req, res) {
    res.json({"mess": "<node_demo> Welcome to Nodejs Application!"});    
});

module.exports = router;