/**
 * Created by Phtoph on 4/13/2016.
 */
"use strict";
var express = require("express");
var router = express.Router();
exports.router = router;
/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});
