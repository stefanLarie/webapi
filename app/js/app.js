'use strict';

// In production use:
//require('//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js');'
var angular = require('angular');
require('ui-router');

var app = angular.module('app', [
  'ui.router',
]);

// APP
require('./core/services/VersionService.js');
require('./core/filters/VersionFilter.js');
require('./core/directives/VersionDirective.js');

// CORE

require('./core/controllers/AppCtrl.js');
require('./core/controllers/NavbarCtrl.js');

// MAIN
require('./main/state.js');
require('./main/controllers/HomeCtrl.js');
require('./main/controllers/AboutCtrl.js');
require('./main/controllers/ContactCtrl.js');
require('./main/controllers/InportCtrl.js');
require('./main/controllers/ModalCtrl.js');
