var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (request, response) {
  console.log(`request served at ${new Date()}`);

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

module.exports = router;
