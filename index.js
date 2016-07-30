var http = require('http')
var express = require('express')
//var stormpath = require('stormpath')

var app = express()

app.get('/api/notes', function(req, res) {
  res.json({notes: "Your API call to this get function was successfull."})
})

app.listen(9000)

