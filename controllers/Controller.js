const cheerio = require( "cheerio");
const axios = require ("axios");

const db = require("../models");
// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    console.log(req.uid)
    if(req.uid) {
      db.Watchlist
        .find(req.uid)
        // .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
   }
   else {
   res.sendStatus(500).json({error: 'It looks like a proper uid was not provided'})
   }},
  findById: function (req, res) {
    db.InterestRate
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req)
    db.Watchlist
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Book
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getTerms: function (req, res) {
    return axios.get(
      "https://www.zacks.com/help/glossary/index.php?fbclid=IwAR12gFtr8rS2Rw-AWUuMgGTzgoLI5qwnGNiq_vroGUWRhebzhsP-SFSf0rc"
    ).then((response) => {

      let $ = cheerio.load(response.data);
      const terms = [];
      const definitions = [];
      $("section.glossary_content").each(function (i, element) {
        let term = $(element).children("h1").children("a").text();
        term = term.toUpperCase();
        let definition = $(element).children("p").text();
        terms.push(
          term
        );
        definitions.push(
          definition
        )
      })
      const returnarray = [terms, definitions];
      this.response = (returnarray)
      res.json(this.response);
    })
  }
};