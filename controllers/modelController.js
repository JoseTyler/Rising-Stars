const Model = require("../models/Model");


const modelController = {
  // INDEX
  index: function (req, res) {
    Model.find().then(Mdl => {
      res.send(Mdl)
    });
  },

  // SHOW
  show: function (req, res) {
    Model.findById(req.params.id).then(Mdl => {
      res.send(Mdl);
    });
  },

  // CREATE
  create: function (req, res) {
    Model.create(req.body).then(() => res.send(200));
  },

  //UPDATE
  update: function (req, res) {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
      res.send(200);
    });
  },

  // DELETE
  delete: function (req, res) {
    Model.findByIdAndRemove(req.params.id).then(() => {
      res.send(200);
    });
  }

};

// EXPORTS
module.exports = modelController;