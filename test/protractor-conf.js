var path = require('path');
var fs = require('fs');

var config = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/../config.json')));

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:' + config.server.port + '/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
