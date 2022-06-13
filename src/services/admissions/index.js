const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

var usersRouter = require("./routes/users");

app.get("/", (request, response) => {
  response.send("User management service GET request");
});

app.use("/users", usersRouter);

app.listen(80, () => console.log("Admissions Server is up and running"));
