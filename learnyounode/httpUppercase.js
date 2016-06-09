var http = require('http')
var map = require('through2-map')

var port = process.argv[2]

http.createServer(function (request, response) {
  // check to see if request method is POST
  if (request.method === 'POST') {
    // write request status and content type to resposne head
    response.writeHead(200, {'Content-Type': 'text/plain'})
    // pipe request to response with through2-map
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(response)
  } else {
    // write method not allowed error to response header if method not POST
    response.writeHead(405)
  }
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
})
