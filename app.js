const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
require('./config/db.config')
const app = express();


app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
hbs.registerPartials(__dirname + '/views/partials');

app.use(logger('dev'));
app.use(express.urlencoded());


const commonRoutes = require('./routes/common.routes');
app.use("/", commonRoutes);
const usersRoutes = require('./routes/users.routes');
app.use("/", usersRoutes);
/*const dogsRoutes = require('./routes/dogs.routes')
app.use(dogsRoutes);
const catsRoutes = require('./routes/cats.routes')
app.use(catsRoutes);
*/
app.listen(3000, () => { console.log("app running on port 3000") });