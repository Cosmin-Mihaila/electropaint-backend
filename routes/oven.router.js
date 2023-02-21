const express = require("express");
const router = express.Router();
const ovenController = require("../controllers/oven.controller");

router.get("/getalloven", ovenController.getAllOven);

module.exports = router;
