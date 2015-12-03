'use strict';

angular.module('myApp.news', [
  'ngRoute',
  'lbServices',
  'myApp.images',
  'ngResource', 
  'myApp.config'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news', {
    templateUrl: 'news/news.html',
    controller: 'NewsCtrl'
  });
}])

.controller('NewsCtrl', 
      ['$resource', 'imagesCDNRoot', '$scope', '$sce', 'News',
function($resource, imagesCDNRoot, $scope, $sce, News) {

  var newsList = [], currentNewsIndex = 0;

  $scope.activeNews = [];
   
  // Load news from API:
  News.find(function(news) {
    newsList = news;
    $scope.changeNews(0);
  });
  
  // walk through the news:
  $scope.changeNews = function (step) {
    currentNewsIndex += step;
    $scope.showPrevious = currentNewsIndex > 0;
    $scope.showNext = currentNewsIndex < newsList.length - 1;
    
    // fetch item and prepare it for display:
    var item = newsList[currentNewsIndex];
    item.body = $sce.trustAsHtml(item.dynamic.body);
    item.image = imagesCDNRoot + item.dynamic.image;
    
    // We have only 1 active element,
    // but for easy animation we keep put it in array
    $scope.activeNews.length = 0;
    $scope.activeNews.push(item);
  };
  
}]);
