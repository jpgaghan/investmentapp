const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./tbd-invest/routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });