const db = require("../models/user");


module.exports = {
    create: function(req, res) {
        db.signin
          .create(req.body)
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.signin
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbUser => res.json(dbUser))
          .catch(err => res.status(422).json(err));
    },
    delete: function(req, res) {
        db.signin
            .findById({ _id: req.params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));      
    }   
};