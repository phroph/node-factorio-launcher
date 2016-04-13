/**
 * Created by Phtoph on 4/13/2016.
 */
"use strict";
var express = require("express");
var router = express.Router();
exports.router = router;
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});
