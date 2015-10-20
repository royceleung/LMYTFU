angular.module('youtube', ['ngRoute'])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/channel', {
      templateUrl: '/channel.html'
    })
    .when('/search', {
      templateUrl: '/search.html'
    })
    .when('/playlist', {
      templateUrl: '/playlist.html'
    })
    .otherwise({
      redirectTo: '/search'
    });
})