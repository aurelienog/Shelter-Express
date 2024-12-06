const routes = require('express').Router();
const common = require('../controllers/common.controller');

routes.get('/', common.home);


module.exports = routes;