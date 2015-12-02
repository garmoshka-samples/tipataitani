'use strict';

// Declare app level module which depends on views, and components
angular.module('news', [
  'ngRoute',
  'ngMaterial',
  'myApp.news',
  'ngAnimate',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/news'});
}]);
