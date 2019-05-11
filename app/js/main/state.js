// Sub-application/main Level State
angular.module('app').config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.when('','/home')
  $stateProvider

  .state('app',{
    url: '',
   templateUrl: 'js/core/templates/main.tpl.html',
  })
    .state('app.home', {
      url: '/home',
      templateUrl: 'js/main/templates/home.tpl.html',
      controller: 'HomeCtrl'
    })
    .state('app.about', {
      url: '/about',
      templateUrl: 'js/main/templates/about.tpl.html',
      controller: 'AboutCtrl'
    })
    .state('app.contact', {
      url: '/contact',
      templateUrl: 'js/main/templates/contact.tpl.html',
      controller: 'ContactCtrl'
    })
    .state('app.informatii', {
      url: '/informatii',
      templateUrl: 'js/main/templates/informatii.tpl.html',
      controller: 'InportCtrl'
    })
    .state('app.img',{
      url:'/img',
      templateUrl: '/Images/Screenshot.png'
    })
}]);
