var http = require('http')
var url = require('url')

http.createServer(function (request, response) {
  url = url.parse(request.url, true)
  console.log(url)
}).listen(+process.argv[2])
