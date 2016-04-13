"use strict";
// import * as favicon from "serve-favicon";
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var request = require("request");
var index = require("./routes/index");
var users = require("./routes/users");
var Error = require("http-errors");
var mod_1 = require("./src/mod");
request("http://api.factoriomods.com/mods", function (err, res, body) {
    var mods = JSON.parse(body);
    mods.sort(function (a, b) { if (a.id > b.id) {
        return 1;
    }
    else if (a.id < b.id) {
        return -1;
    }
    else {
        return 0;
    } })
        .forEach(function (mod) { console.log(mod_1.Mod.parseFromJson(JSON.stringify((mod)))); });
});
var app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", index.router);
app.use("/users", users.router);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = Error("Not Found");
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render("error", {
            error: err,
            message: err.message,
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render("error", {
        error: {},
        message: err.message,
    });
});
module.exports = app;
