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

module.exports.doLogin = (req, res, next) => {

  function renderWithErrors(errors) {
    const formattedErrors = {};
      for(const key in errors) {
        formattedErrors[key] = errors[key];
      }
    res.render('users/login', { errors: formattedErrors, user: req.body })
  };


  User.findOne({email : req.body.email})
    .then((user) => {
      if (user) { 
        return bcrypt
          .compare(req.body.password, user.password)
            .then((ok) => {
              if (ok) {
              req.session.userId = user.id;           
              res.redirect("/");
              } else {
                renderWithErrors({ password: 'Password incorrect'});
              }
            });
      } else { 
        renderWithErrors({ email: 'User does not exist'}) 
      }    
    })  
    .catch((error) => {
      console.error(error.errors)
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors);  
      } else {
        next(error);
      }
    })
  };

module.exports.create = (req, res, next) => {
  res.render('./users/create')
};

module.exports.doCreate = (req, res, next) => {

  function renderWithErrors(errors) {
    res.render('./users/create', { errors, user: req.body });
  }

  delete req.body.role;

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) { 
        renderWithErrors({ email: 'email already registered'})
      } else { 
        return User.create(req.body)
          .then((user) => {
            req.session.userId = user.id;          
            res.redirect('/')
          })
            
      }
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors)
      } else {
        next(error);
      }
    })
};

/* 

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
    }); */

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
  delete req.body.role;
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


