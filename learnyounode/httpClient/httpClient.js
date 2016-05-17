var http = require('http')
var https = require('https')

module.exports = function (url, callback) {
  http.get(url, function (response) {
    data = response.on('data', function (data) {
      return data.toString()
    })
    callback(null, data)
  })
}
