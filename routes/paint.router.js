const express = require("express");
const router = express.Router();
const paintController = require("../controllers/paint.controller");

router.post("/createpaint", paintController.createPaint);
router.get("/getallpaint", paintController.getAllPaint);

module.exports = router;
