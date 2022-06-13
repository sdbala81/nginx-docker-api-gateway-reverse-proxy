var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, respobse) {
  console.log(`request served at ${new Date()}`);

  response.json([
    {
      id: 1,
      name: "Bala",
    },
    {
      id: 2,
      name: "Ravi",
    },
    {
      id: 1,
      name: "Jhon",
    },
  ]);
});

module.exports = router;
