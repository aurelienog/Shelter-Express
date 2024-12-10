const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
require('./config/db.config')
const app = express();

const { session, loadSessionUser } = require('./config/session.config')

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(`${__dirname}/public`));


app.use(logger('dev'));
app.use(express.urlencoded());
app.use(session);
app.use(loadSessionUser);


const commonRoutes = require('./routes/common.routes');
app.use("/", commonRoutes);
const usersRoutes = require('./routes/users.routes');
app.use("/", usersRoutes);
/*const dogsRoutes = require('./routes/dogs.routes')
app.use(dogsRoutes);
const catsRoutes = require('./routes/cats.routes')
app.use(catsRoutes);
*/

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send("Ops, ha sucedido un error");
})

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log("app running on port 3000") });