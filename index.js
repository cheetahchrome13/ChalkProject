var chalk = require('chalk');
var _ = require('lodash');
const file = 'data.json';
var error;
var jsonfile = require('jsonfile')

jsonfile.readFile(file, function(localError, obj) {
    _.forEach(obj.items[0], function(value) {
        console.log(value);
    });
    _.forEach(obj.items[1], function(value) {
        console.log(value);
    });
  
    console.log(obj);
 
})


