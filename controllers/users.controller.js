const mongoose = require('mongoose');
const User = require('../models/user.model');


module.exports.list = (req, res, next) => {
  User.find()
    .then((users) => {
    res.render('./users/list', {users : users})
  })
}

module.exports.create = (req, res, next) => {
  res.render('./users/create')
}

module.exports.doCreate = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      name = req.body.name;
      email = req.body.email;
      password = req.body.password;
    res.redirect(`/users/${user.id}`)
  })
}

module.exports.detail = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
    res.render('./users/detail', {user})
  })
}

module.exports.update = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
    res.render('./users/update', {user})
  })
}

module.exports.doUpdate = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      name = req.body.name;
      email = req.body.email;
      password = req.body.password;
      res.redirect(`/users/${user.id}`)
  })
}

module.exports.delete = (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
    res.redirect('/')
  })
}


