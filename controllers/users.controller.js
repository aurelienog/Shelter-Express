const mongoose = require('mongoose');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');


module.exports.login = (req, res, next) => {
  User.find()
    .then((users) => {
      res.render('./users/login', { users: users })
    })
    .catch((err) => {
      next(err);
    });
};

const session = {};
module.exports.doLogin = (req, res, next) => {
  User.findOne({email : req.body.email})
    .then((user) => {
      bcrypt.compare(req.body.password, user.password).then(ok => {
        if (ok) {
          const sessionId = ((Math.random() + 1).toString(36).substring(7));
          session[sessionId] = user.id;

          res.set("Set-Cookie", `sessionid=${sessionId}`);
          res.redirect("/");
        } 
      })
      .catch(next)
    .catch(next);


    
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.create = (req, res, next) => {
  res.render('./users/create')
};

module.exports.doCreate = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      name = req.body.name;
      email = req.body.email;
      password = req.body.password;
      res.redirect(`/users/${user.id}`)
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        console.log(err);
        res.render('./users/create', { 
          errors: err.errors,
          user : req.body
        })
      } else {
        next(err);
      }
    });
};

module.exports.detail = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('./users/detail', { user })
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.update = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('./users/update', { user })
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.doUpdate = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      name = req.body.name;
      email = req.body.email;
      password = req.body.password;
      res.redirect(`/users/${user.id}`)
    })
};

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      next(err);
    });
};


