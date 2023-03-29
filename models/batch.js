const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    numeCompanie: String,
    numeProdus: String,
    codProdus: String,
    numarPiesa: String,
    ral: String,
    barcode: String,
    cantitate: String,
    statusCurent: String,
    lotFurnizor: String,
    cuptor: String,
    statusuri: Object,
    defect: Boolean,

    termenLivrare: String,
  },
  { collection: "batches" }
);

module.exports = mongoose.model("Batch", batchSchema);
