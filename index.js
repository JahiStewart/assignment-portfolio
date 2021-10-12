const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {
    // normalize url by removing querystring, optional trailing slash, and
    // making lowercase
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path) {
      case '':
        serveStaticFile(res, '/public/home.html', 'text/html')
        break
    }
  })
server.listen(port, () => console.log(`server started on port ${port}; ` +
'press Ctrl-C to terminate....'))