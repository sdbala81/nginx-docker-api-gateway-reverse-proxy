import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
  console.log("Token Verified ", JSON.stringify(request.headers));
  response.status(200).send();
});

export default router;
