const express = require("express");
const ejs = require("ejs");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const webRouter = require("./route/webRoute");
app.use(webRouter);
//for api

const ApiRout = require("./route/apiRoute");

app.use("/", ApiRout);

const Port = 1000;
const dBDriver =
  "mongodb+srv://KillerTuri:nLfnCZdP1wSCtTDj@cluster0.ytyq8p5.mongodb.net/crud";
mongoose
  .connect(dBDriver, { useNewUrlParser: true, useUnifiedTopology: true })

  .then((result) => {
    app.listen(Port, () => {
      console.log(`server running port: http://localhost:${Port}`);
      console.log("database connected");
    });
  })
  .catch((error) => {
    console.log("error");
  });
