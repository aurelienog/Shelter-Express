const mongoose = require('mongoose');
const Dog = require('../models/dog.model');
const User = require('../models/user.model');
const { doLogin } = require('./auth.controller');

module.exports.list = (req, res, next) => {
  Dog.find()
    .then((dogs) => {
      res.render('./dogs/list', { dogs : dogs });
    })
    .catch(next)
}

module.exports.detail = (req, res, next) => {
  Dog.findById(req.params.id)
    .populate('user')
    .then((dog) => {
      res.render('./dogs/detail', { dog : dog } );
    })
    .catch(next)
}

module.exports.create = (req, res, next) => {
  res.render('./dogs/create');
}

module.exports.doCreate = (req, res, next) => {
  console.log('body', req.body);
    console.log('file',req.file);
    if (req.file) {
      req.body.image = req.file.path;
    }
    
  const dog = req.body;
    dog.user = req.user.id;
    
  Dog.create(dog)
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
      res.redirect("/dogs")
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
  Dog.findById(req.params.id)
    .then(dog => { console.log(dog.id)
      if (!dog) {
      res.redirect("/dogs")
      } else if (dog.user == req.user.id) {
        dog.deleteOne()
        .then(() => res.redirect("/dogs"))
        .catch(next)
      } else {
        res.redirect("/dogs")
      }
  })
    .catch(next)
}