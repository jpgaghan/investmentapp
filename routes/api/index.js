const router = require("express").Router();
const tickerRoutes = require("./tickers");

// Book routes
router.use("/tickers", tickerRoutes);

module.exports = router;
