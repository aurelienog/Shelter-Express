const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/users');
  }
}

// importante poner el ? por si el usuario no existe
module.exports.checkRole = (role) => {
  return (req, res, next) => {
    if(req.user?.role === role) {
      console.log('admin', req.user.role);
      next()
    } else {
      next(createError(403, "Forbidden"));
    }
  }
}
