import express from "express";
import validationRouter from "./validationRouter.js";

const router = express.Router();

router.use("/validate", validationRouter);

export default router;
