const handlers = require('./lib/handlers')
const bodyParser = require('body-parser')

const express = require('express')
const expressHandlebars = require('express-handlebars')
const weatherMiddleware = require('./lib/middleware/weather')

const app = express()

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
  helpers: {
    section: function(name, options) {
      if(!this._sections) this._sections = {}
      this._sections[name] = options.fn(this);
      return null
    }
  }
}))
app.set('view engine', 'handlebars')

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000

// eslint-disable-next-line no-undef
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(weatherMiddleware)

app.get('/', handlers.home)

app.get('/about', handlers.about)

app.get('/section', handlers.sections)

app.get('/newsletter-signup', handlers.newsletterSignup)

app.post('/newsletter-signup/process', handlers.newsletterSignupProcess)

app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou)

// custom 404 page
app.use(handlers.notFound)

// Custom 500 page

app.use(handlers.serverError)

if(require.main === module) {
  app.listen(port, () => console.log(`Express started on http://localhost:${port}`))
} else {
  module.exports = app
}
