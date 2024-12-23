module.exports.home = (req, res, next) => {
  res.render('./common/home')
}

module.exports.us = (req, res, next) => {
  res.render("./common/us")
}


module.exports.adopt = (req, res, next) => {
  res.render("./common/adopt")
}

module.exports.volunteer = (req, res, next) => {
  res.render("./common/volunteer")
}

module.exports.donate = (req, res, next) => {
  res.render("./common/donate")
}