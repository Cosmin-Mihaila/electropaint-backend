const Paint = require("../models/paint");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const fs = require("fs");
const path = require("path");

const testDoc = async (req, res) => {
  // Load the docx file as binary content
  const content = fs.readFileSync(
    path.resolve(__dirname, "tag-example.docx"),
    "binary"
  );

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  // Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
  doc.render({
    first_name: "John",
    last_name: "Doe",
    phone: "0652455478",
    description: "New Website",
  });

  const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
  });

  // buf is a nodejs Buffer, you can either write it to a
  // file or res.send it with express for example.
  fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
  res.status(200).json({
    message: "Success!",
  });
};

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
  testDoc,
};
