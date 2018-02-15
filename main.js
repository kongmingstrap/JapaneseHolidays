'use strict';

const restify = require('restify');
const holiday = require("./models/holiday");

function respond(req, res, next) {
  holiday.isHoliday();

  res.send('holiday');
}

var server = restify.createServer();
server.get('/holiday', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
