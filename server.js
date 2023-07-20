const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

//dotenv config
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Server Running",
  });
});

//port
const port = process.env.PORT || 8080;

//listen
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
