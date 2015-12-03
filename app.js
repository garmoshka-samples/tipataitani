'use strict';

// Declare app level module which depends on views, and components
angular.module('news', [
  'ngRoute',
  'lbServices',
  'ngMaterial',
  'myApp.news',
  'myApp.config',
  'ngAnimate',
  'myApp.version'
])
    
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/news'});
}])
    
.config(['LoopBackResourceProvider', 'apiURL',
function(LoopBackResourceProvider, apiURL) {
    LoopBackResourceProvider.setUrlBase(apiURL);
}])
;