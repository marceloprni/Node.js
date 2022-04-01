var app = require('./app');
var http = require('http');

var debug = require('debug')('app:server');
var port = normalizePort(process.env.PORT || '3500');
var server = http.createServer(app);