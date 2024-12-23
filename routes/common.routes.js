const routes = require('express').Router();
const common = require('../controllers/common.controller');

routes.get('/', common.home);
routes.get('/adopt', common.adopt);
routes.get('/about-us', common.us);
routes.get('/volunteer', common.volunteer);
routes.get('/donate', common.donate);


module.exports = routes;