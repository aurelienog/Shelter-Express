const storage = require('../config/storage.config');
const secure = require('../middlewares/secure.mid');

const routes = require('express').Router();
const cats = require('../controllers/cats.controller')

routes.get('/cats', cats.list)
routes.get('/cats/new', secure.isAuthenticated, secure.checkRole('admin'), cats.create)
routes.post('/cats', secure.isAuthenticated, secure.checkRole('admin'), storage.single('image'), cats.doCreate)
routes.get('/cats/:id/edit', secure.isAuthenticated, secure.checkRole('admin'), cats.update)
routes.get('/cats/:id', cats.detail)
routes.post('/cats/:id/delete', secure.isAuthenticated, secure.checkRole('admin'), cats.delete)
routes.post('/cats/:id', secure.isAuthenticated, secure.checkRole('admin'), storage.single('image'), cats.doUpdate)


module.exports = routes;