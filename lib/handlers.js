const fortuneCookie = require('./fortune');

exports.notFound = (req, res) => res.render('404')

// eslint-disable-next-line no-unused-vars
exports.serverError = (err, req, res, next) => {
  console.error(err)
  res.render('500')
}

exports.home = (req, res) => {
  res.render('home')
}

exports.about = (req, res) => {
  res.render('about', { fortune: fortuneCookie.getCookie() })
}

exports.sections = (req, res) => {
  res.render('section-test')
}