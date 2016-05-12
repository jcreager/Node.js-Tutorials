var client = require('./httpClient')

var url = process.argv[2]

client(url, function (err, data) {
  //if (err)
    //return console.error('There was an error:', err)
  console.log(data)
})
