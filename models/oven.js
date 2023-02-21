const mongoose = require("mongoose");

const ovenSchema = new mongoose.Schema(
  {
    idCuptor: String,
    data: String,
    durata: String,
    temperatura: String,
    lot: String,
  },
  { collection: "oven" }
);

module.exports = mongoose.model("Oven", ovenSchema);
