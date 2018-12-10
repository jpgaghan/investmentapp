const router = require("express").Router();
const tickers = require("./tickers");

// Book routes
router.use("/tickers", tickers);

module.exports = router;
