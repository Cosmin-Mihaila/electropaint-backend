const express = require("express");
const router = express.Router();
const paintController = require("../controllers/paint.controller");

router.post("/createpaint", paintController.createPaint);
router.get("/createoldpaint", paintController.createOldPaint);
router.get("/getallpaint", paintController.getAllPaint);
router.get("/testdoc", paintController.testDoc);
router.get("/getpaint/:id", paintController.getPaint);
module.exports = router;
