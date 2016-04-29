"use strict";
import {Request} from "express";
import {Response} from "express";

let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function(req: Request, res: Response) {
    res.render("index", { title: "Express" });
});

export {router};
