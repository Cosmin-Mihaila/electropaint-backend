const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    numeCompanie: String,
    numeProdus: String,
    ral: String,
    barcode: String,
    cantitate: String,
    statusCurent: String,
    cuptor: String,
    statusuri: Object,
  },
  { collection: "batches" }
);

module.exports = mongoose.model("Batch", batchSchema);
