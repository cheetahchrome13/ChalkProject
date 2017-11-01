var chalk = require('chalk');
var lodash = require('lodash');
const file = 'data.json';

var jsonfile = require('jsonfile')
jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)
})

