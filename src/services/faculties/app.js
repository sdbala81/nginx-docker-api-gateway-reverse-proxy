var express = require("express");
var cors = require("cors");

var usersRouter = require("./routes/users");
var departmentRouter = require("./routes/departments");

var app = express();
app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/departments", departmentRouter);

app.listen(80, () => console.log("Faculties is up and running"));

// module.exports = app;
