const express = require("express");
const router = express.Router();
const batchController = require("../controllers/batch.controller");

router.post("/createbatch", batchController.createBatch);
router.post("/updatebatch", batchController.updateBatch);
router.get("/getallbatches", batchController.getAllBatches);
router.delete("/deletebatch", batchController.deleteBatch);
router.get("/getbatch/:id", batchController.getBatch);
router.get("/adaugaclientivechi", batchController.adaugaClientiVechi);
router.get("/deleteall", batchController.deleteAll);

module.exports = router;
