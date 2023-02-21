const mongoose = require("mongoose");

const paintSchema = new mongoose.Schema(
  {
    barcode: String,
    dataIntrare: String,
    ral: String,
    furnizor: String,
    cantitate: String,
    identificatorFurnizor: String,
  },
  { collection: "paint" }
);

module.exports = mongoose.model("Paint", paintSchema);
