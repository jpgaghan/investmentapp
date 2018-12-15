const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
    console.log('############################');
    console.dir(process.env);
    console.log(__dirname);
    console.log('############################');
    app.use(express.static(__dirname));
    app.use(express.static(path.join(__dirname, 'app/build')));
}
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'app', 'build', 'index.html'));
// });
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(routes);

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// mongoose.connect(MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/investmentapp");
// app.get('/*', function(req, res) {
//     res.sendFile('/app/public/index.html');
//   })
app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});