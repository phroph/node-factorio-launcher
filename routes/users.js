"use strict";
var express = require("express");
var router = express.Router();
exports.router = router;
/* GET users listing. */
router.get("/", function (req, res) {
    res.send("respond with a resource");
});
