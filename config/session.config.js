const session = require('express-session');

module.exports.session = session({
  secret: process.env.SESSION_SECRET || 'super secret',
  resave: false,
  saveUninitialized: false,
  //proxy: process.env.SESSION_SECURE === 'true',
  cookie: {
    httpOnly: true,
    secure: process.env.SESSION_SECURE === 'true'
  }/*,
  store: MongoStore.create({
    mongoUrl: MONGODB_URI,
    ttl: 14 * 24 * 60 * 60 // = 14 days. Default
  })*/
})