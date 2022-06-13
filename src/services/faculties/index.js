const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (request, response) => {
  response.send("Faculties service GET request");
});

app.get("/faculties", (request, response) => {
  response.send("Get the list of all the faculties");
});

app.get("/departments", (request, response) => {
  response.json([
    {
      id: 1,
      name: "Medicine",
    },
    {
      id: 2,
      name: "Computer Science",
    },
    {
      id: 1,
      name: "Agriculture",
    },
  ]);
});

app.get("/departments/count", (request, response) => {
  response.send("Departments in a faculty count");
});

app.get("/departments/count/something", (request, response) => {
  response.send("Departments in a faculty count");
});

app.listen(5001, () => console.log("Faculties Server is up and running"));
