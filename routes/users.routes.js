const routes = require('express').Router();
const users = require('../controllers/auth.controller');

routes.get('/users', users.login);
routes.post('/users', users.doLogin);
routes.get('/users/create', users.create);
routes.post('/users/create', users.doCreate);
routes.get('/users/:id/update', users.update);
routes.post('/users/:id/delete', users.delete);
routes.post('/users/:id', users.doUpdate);
routes.get('/users/:id', users.detail);

module.exports = routes;