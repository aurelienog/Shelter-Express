module.exports.isAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

// importante poner el ? por si el usuario no existe
module.exports.checkRole = (role) => {
  return (req, res, next) => {
    if(req.user?.role === 'admin') {
      next()
    } else {
      res.redirect('/login');
    }
  }
}
