const mongoose = require('mongoose');
const Dog = require('../models/dog.model');

module.exports.list = (req, res, next) => {
  Dog.find()
    .then((dogs) => {
      res.render('./dogs/list', { dogs : dogs });
    })
    .catch(next)
}

module.exports.detail = (req, res, next) => {
    Dog.findById(req.params)
    .then((dogs) => {
      res.render('./dogs/detail', { dogs : dogs } );
    })
    .catch(next)
}

module.exports.create = (req, res, next) => {
  res.render('./dogs/create');
}

module.exports.doCreate = (req, res, next) => {
  Dog.create(req.body)
    .then((dog) => {
      name = req.body.name;
      age = req.body.age;
      breed = req.body.breed;
      sex = req.body.sex;
      size = req.body.size;
      weight = req.body.weight;
      licence = req.body.licence;
      idealHome = req.body.idealHome;
      livingWithChildren = req.body.livingWithChildren;
      livingWithDogs = req.body.livingWithDogs;
      livingWithCats = req.body.livingWithCats;
      res.redirect(`/dogs/`)
    })
    .catch(next);
}

module.exports.update = (req, res, next) => {
  res.render('./dogs/update');
}

module.exports.doUpdate = (req, res, next) => {
  Dog.findByIdAndUpdate(req.params, req.body)
    .then((dog) => {
      name = req.body.name;
      age = req.body.age;
      breed = req.body.breed;
      sex = req.body.sex;
      size = req.body.size;
      weight = req.body.weight;
      licence = req.body.licence;
      idealHome = req.body.idealHome;
      livingWithChildren = req.body.livingWithChildren;
      livingWithDogs = req.body.livingWithDogs;
      livingWithCats = req.body.livingWithCats;
      res.redirect(`/dogs/${dog.name}`)
    })
    .catch(next)
}

module.exports.delete = (req, res, next) => {
  Dog.findOneAndDelete(req.params)
    .then(res.redirect("/"))
    .catch(next)
}