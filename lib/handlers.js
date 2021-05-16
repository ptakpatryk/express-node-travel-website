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

exports.newsletterSignup = (req, res) => {
  res.render('newsletter-signup', { csrf: 'CSRF token goes here' })
}

exports.newsletterSignupProcess = (req, res) => {
  console.log('Form (form querystring): ' + req.query.form)
  console.log('CSRF token (from hidden form field): ' + req.body._csrf)
  console.log('Name (form visible form field): ' + req.body.name)
  console.log('Email (form visible form field): ' + req.body.email)
  res.redirect(303, '/newsletter-signup/thank-you')
}

exports.newsletterSignupThankYou = (req, res) => {
  res.render('newsletter-signup-thank-you')
}