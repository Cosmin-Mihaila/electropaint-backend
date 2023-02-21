var express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://electropaint:8pwV9jVQtpiZILfK@electropaint.wbq5kkm.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

var app = express();
var batchRouter = require("./routes/batch.router");
var paintRouter = require("./routes/paint.router");
var ovenRouter = require("./routes/oven.router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/batch", batchRouter);
app.use("/api/paint", paintRouter);
app.use("/api/oven", ovenRouter);

app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
