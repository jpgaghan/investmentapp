const router = require("express").Router();
const articles = require("./articles");

// Book routes
router.use("/articles", articles);

module.exports = router;
