"use strict";
var express = require("express");
var router = express.Router();
exports.router = router;
/* GET home page. */
router.get("/", function (req, res) {
    res.render("index", { title: "Express" });
});
