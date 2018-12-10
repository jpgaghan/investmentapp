const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(Controller.findById)
  .put(Controller.update)
  .delete(Controller.remove);

module.exports = router;
