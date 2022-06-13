const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Admissions service GET request");
});

app.listen(80, () => console.log("Admissions Server is up and running"));
