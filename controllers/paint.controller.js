const Paint = require("../models/paint");

const createPaint = async (req, res) => {
  const barcode =
    Date.now() + "" + Math.floor(Math.random() * (999 - 100 + 1) + 100);
  const newPaint = {
    cantitate: req.body.cantitate,
    furnizor: req.body.furnizor,
    ral: req.body.ral,
    barcode: barcode,
    dataIntrare: new Date(),
    identificatorFurnizor: req.body.identificatorFurnizor,
  };
  const currentPaint = new Paint(newPaint);

  currentPaint.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: err._message,
      });
    } else {
      res.status(200).json({
        message: "Success!",
        paint: result,
      });
    }
  });
};

const getAllPaint = async (req, res) => {
  Paint.find().then((paint) => {
    if (paint && paint.length) {
      res.status(200).json({
        message: "Found!",
        paint,
      });
    } else {
      res.status(404).json({
        message: "No paint found!",
      });
    }
  });
};

module.exports = {
  createPaint,
  getAllPaint,
};
