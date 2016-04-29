"use strict";
// import * as favicon from "serve-favicon";
import * as express from "express";
import * as path from "path";
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import * as request from "request";
import * as index from "./routes/index";
import * as users from "./routes/users";
import * as Error from "http-errors";
import {Mod} from "./src/mod";
import {NextFunction} from "express";
import {Response} from "express";
import {Request} from "express";
import {Express} from "express";
import {HttpError} from "http-errors";

request("http://api.factoriomods.com/mods", function(err: Error, res: Response, body: string) {
    let mods = JSON.parse(body);
    mods.sort((a, b) => { if (a.id > b.id) { return 1; } else if (a.id < b.id) { return -1; } else { return 0; } })
        .forEach((mod) => { console.log(Mod.parseFromJson(JSON.stringify((mod)))); });
});

let app: Express = express();

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
app.use(function(req: Request, res: Response, next: NextFunction) {
    let err: HttpError = Error("Not Found");
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function(err: HttpError, req: Request, res: Response) {
        res.status(err.status || 500);
        res.render("error", {
            error: err,
            message: err.message,
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err: HttpError, req: Request, res: Response) {
    res.status(err.status || 500);
    res.render("error", {
        error: {},
        message: err.message,
    });
});


export = app;
