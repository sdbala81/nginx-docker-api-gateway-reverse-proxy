const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Faculties service GET request");
});

app.listen(5001, () => console.log("Faculties Server is up and running"));
