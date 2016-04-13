/**
 * Created by Phtoph on 4/13/2016.
 */
"use strict";
let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

export {router};
