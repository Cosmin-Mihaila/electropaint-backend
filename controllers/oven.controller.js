const Oven = require("../models/oven");

const getAllOven = async (req, res) => {
  Oven.find().then((oven) => {
    if (oven && oven.length) {
      res.status(200).json({
        message: "Found!",
        oven,
      });
    } else {
      res.status(404).json({
        message: "No paint found!",
      });
    }
  });
};

module.exports = {
  getAllOven,
};
