const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://heroku_rgnsmb6z:aaavjin8kcg79n80siiinkvgb2@ds155313.mlab.com:55313/heroku_rgnsmb6z", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});