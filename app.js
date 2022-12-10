const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const invoiceRouter = require("./routes/invoiceRoutes");

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());
app.use("*", cors());

app.use("/api/v1/invoices", invoiceRouter);

module.exports = app;
