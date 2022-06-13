var express = require("express");
var cors = require("cors");

var usersRouter = require("./routes/users");
var departmentRouter = require("./routes/departments");

var app = express();

app.use(cors());

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/departments", departmentRouter);

module.exports = app;
