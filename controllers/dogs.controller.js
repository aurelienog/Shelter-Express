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
    Dog.findById(req.params.id)
    .then((dog) => {
      res.render('./dogs/detail', { dog : dog } );
    })
    .catch(next)
}

module.exports.create = (req, res, next) => {
  res.render('./dogs/create');
}

module.exports.doCreate = (req, res, next) => {
  Dog.create(req.body)
    .then((dog) => {
      image = req.body.image;
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
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.render('./dogs/create', {
          errors: err.errors,
          dog: req.body
        })
      } else {
        next(err);
      };
    });
}

module.exports.update = (req, res, next) => {
  res.render('./dogs/update');
}

module.exports.doUpdate = (req, res, next) => {
  Dog.findByIdAndUpdate(req.params.id, req.body)
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
  Dog.findOneAndDelete(req.params.id)
    .then(res.redirect("/"))
    .catch(next)
}