const db = require("../mogoModels");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    console.log(req.query)
    db.Todo
      .find(req.query)
      .sort({
        date: -1
      })
      .then(dbModel => {
        console.log(dbModel)
        return res.json(dbModel)
      })

      .catch(err => {
        console.log(err)
        return res.status(422).json(err)
      });
  },
  findById: function (req, res) {
    db.Todo
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Todo
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err)
        return res.status(422).json(err)
      });
  },
  update: function (req, res) {
    db.Todo
      .findOneAndUpdate({
        _id: req.params.id
      }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Todo
      .findById({
        _id: req.params.id
      })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};