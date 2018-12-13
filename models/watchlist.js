const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userWatchlist = new Schema({
  ticker: { type: String, required: true },
  uid: { type: String, required: true },
  // date: { type: Date, default: Date.now }
});

const Watchlist = mongoose.model("Watchlist", userWatchlist);

module.exports = Watchlist;
