require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const createError = require('http-errors');
require('./config/db.config');
require("./config/hbs.config");
const app = express();

const { session, loadSessionUser } = require('./config/session.config');

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.use(express.static(`${__dirname}/public`));


app.use(logger('dev'));
app.use(express.urlencoded());
app.use(session);
app.use(loadSessionUser);

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

const commonRoutes = require('./routes/common.routes');
app.use("/", commonRoutes);
const usersRoutes = require('./routes/users.routes');
app.use("/", usersRoutes);

const dogsRoutes = require('./routes/dogs.routes');
app.use(dogsRoutes);

/*
const catsRoutes = require('./routes/cats.routes')
app.use(catsRoutes);
*/

app.use((req, res, next) => {
  next(createError(404, 'Page not found'))
})



app.use((error, req, res, next) => {
  error = !error.status? createError(500, error) : error;
  res.status(error.status);

  switch (error.status) {
    case 403:
      res.render('./errors/403', { error })
      break;
    case 404:
      res.render('./errors/404', { error })
        break;
    case 500:
      res.render('./errors/500', { error })
      break;
    default:
      res.render('./errors/default', { error })
  }

});

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log("app running on port 3000") });