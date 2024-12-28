const mongoose = require('mongoose');
const Cat = require('../models/cat.model')

module.exports.list = (req, res, next) => {
    const criterial = {};


    Cat.find(criterial)
        .then((cats) => {
            res.render('./cats/list', { cats, query: req.query })
        })
        .catch(next)
}

module.exports.detail = (req, res, next) => {
    Cat.findById(req.params.id)
        .then((cat) => res.render('./cats/detail', { cat }))
        .catch(next)
}

module.exports.create = (req, res, next) => {
    res.render('./cats/create')
}

module.exports.doCreate = (req, res, next) => {

    if (req.file) {
        req.body.image = req.file.path;
    }

    Cat.create(req.body)
        .then((cat) => {
            image = req.body.image;
            name = req.body.name;
            age = req.body.age;
            breed = req.body.breed;
            sex = req.body.sex;
            idealHome = req.body.idealHome;
            livingWithChildren = req.body.livingWithChildren;
            livingWithDogs = req.body.livingWithDogs;
            livingWithCats = req.body.livingWithCats;
            res.redirect('/cats')
        })
        .catch((err) => {
            if (err instanceof mongoose.Error.ValidationError) {
                res.render('./cats/create', {
                errors: err.errors, cat: req.body
                })
            } else {
                next(err);
            };
        });
    }

module.exports.update = (req, res, next) => {
    Cat.findById(req.params.id)
        .then((cat) => res.render('./cats/edit', { cat }))
        .catch(next)
}

module.exports.doUpdate = (req, res, next) => {
    
}

module.exports.delete = (req, res, next) => {
    Cat.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/cats'))
        .catch(next)
}