const secure = require('../middlewares/secure.mid');
const routes = require('express').Router();

const dogs = require('../controllers/dogs.controller');

routes.get("/dogs", dogs.list);
routes.get("/dogs/create", dogs.create);
routes.post("/dogs/create", dogs.doCreate);
routes.get("/dogs/:id/update", dogs.update);
routes.post("/dogs/:id/update", dogs.doUpdate);
routes.get("/dogs/:id", dogs.detail);
routes.post("/dogs/:id/delete", secure.isAuthenticated, dogs.delete);

module.exports = routes;