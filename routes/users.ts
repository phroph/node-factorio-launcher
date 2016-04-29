"use strict";
import {Response} from "express";
import {Request} from "express";

let express = require("express");
let router = express.Router();

/* GET users listing. */
router.get("/", function(req: Request, res: Response) {
    res.send("respond with a resource");
});

export {router};
