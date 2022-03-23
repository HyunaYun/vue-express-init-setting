var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

/**
 * ORACLE GLOBAL SETTING
 * 오라클의 경우 반드시 전역으로 세팅해줘야 하는 기본 옵션값이 있다.
 */
var oracledb = require("oracledb");

oracledb.outFormat = oracledb.OBJECT; // ColumnName: Value 형식으로 변경
oracledb.fetchAsString = [oracledb.CLOB]; // CLOB를 스트링으로 가져오도록 설정
oracledb.fetchAsBuffer = [oracledb.BLOB]; // BLOB를 버퍼로 가져오도록 설정
oracledb.fetchArraySize = 100;
oracledb.poolTimeout = 5; // 타임아웃 5초
oracledb.queueTimeout = 5 * 1000; // 타임아웃 5초
oracledb.autoCommit = false;

process.env["PATH"] = path.join(__dirname, "/instantclient") + ";" + process.env["PATH"];
oracledb.initOracleClient({libDir: "C:\\oracleclient\\instantclient_12_2"});
/**
 * ORACLE SETTING END
 */

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var routerSample = require("./routes/routerSample");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/sample", routerSample);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
