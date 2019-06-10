const Actor = require("../models/Actor");


const actorController = {
  // INDEX
  index: function (req, res) {
    Actor.find().then(Act => {
      res.send(Act)
    });
  },

  // SHOW
  show: function (req, res) {
    Actor.findById(req.params.id).then(Act => {
      res.send(Act);
    });
  },

  // CREATE
  create: function (req, res) {
    Actor.create(req.body).then(() => res.send(200));
  },

  //UPDATE
  update: function (req, res) {
    Actor.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
      res.send(200);
    });
  },

  // DELETE
  delete: function (req, res) {
    Actor.findByIdAndRemove(req.params.id).then(() => {
      res.send(200);
    });
  }

};

// EXPORTS
module.exports = actorController;