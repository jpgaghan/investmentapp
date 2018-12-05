const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interestSchema = new Schema({
  year: { type: Number, required: true },
  annualpercentagerate: { type: Number, required: true }
  // date: { type: Date, default: Date.now }
});

const InterestRate = mongoose.model("Interest", interestSchema);

module.exports = InterestRate;
