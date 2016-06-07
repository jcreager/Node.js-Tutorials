var http = require('http')
var bl = require('bl')
var body = []
var count = 0

function printBody () {
  for (var index in body) {
    console.log(body[index])
  }
}

function getBody (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      body[index] = data.toString()
      count++
      if (count === 3) {
        printBody()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  getBody(i)
}
