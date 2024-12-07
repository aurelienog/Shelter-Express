const routes = require('express').Router();
const users = require('../controllers/users.controller');

routes.get('/users', users.login);

routes.get('/users/create', users.create)
routes.post('/users', users.doCreate)
routes.get('/users/:id/update', users.update)
routes.post('/users/:id/delete', users.delete)
routes.post('/users/:id', users.doUpdate)
routes.get('/users/:id', users.detail)

module.exports = routes;