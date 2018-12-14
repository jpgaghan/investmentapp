const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/books/:id"
router.route("/")
  .get(Controller.findAll)
  .post(Controller.create)
  .put(Controller.update)
  .delete(Controller.remove);

router.route("/terms")
  .get(Controller.getTerms);

router.route("/:uid")
  .get(Controller.findAll)
module.exports = router;
