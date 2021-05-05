const http = require('http')
const fs = require('fs')
const port = process.env.port || 3000

const server = http.createServer((req, res) => {
  console.log(req.url);
  const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path) {
    case '':
      serverStaticAssets(res, '/public/index.html', 'text/html')
      break
    case 'about':
      serverStaticAssets(res, '/public/about.html', 'text/html')
      break
    case '/img/logo.png':
      serverStaticAssets(res, '/public//img/logo.png', 'text/html')
      break;
    default:
      serverStaticAssets(res, '/public/404.html', 'text/html', 404)
  }
})

function serverStaticAssets(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if(err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('500 - Server Initial Error')
      return;
    }
    res.writeHead(responseCode, { 'Content-Type': contentType })
    res.end(data)
  })
}

server.listen(port, () => console.log(`Server is running on port ${port}`));