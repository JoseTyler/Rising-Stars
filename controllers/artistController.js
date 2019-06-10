const Artist = require("../models/Artist");


const artistController = {
  // INDEX
  index: function (req, res) {
    Artist.find().then(Art => {
      res.send(Art)
    });
  },

  // SHOW
  show: function (req, res) {
    Artist.findById(req.params.id).then(Art => {
      res.send(Art);
    });
  },

  // CREATE
  create: function (req, res) {
    Artist.create(req.body).then(() => res.send(200));
  },

  //UPDATE
  update: function (req, res) {
    Artist.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
      res.send(200);
    });
  },

  // DELETE
  delete: function (req, res) {
    Artist.findByIdAndRemove(req.params.id).then(() => {
      res.send(200);
    });
  }

};

// EXPORTS
module.exports = artistController;