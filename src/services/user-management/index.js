const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("User management service GET request");
});

app.listen(5000, () => console.log("User Management Server is up and running"));
