var app = angular.module('MyndaApp', ['ngRoute']).config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
      $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .when('/', {
        controller: "MainController",
        templateUrl: "views/homepage.html"
      })
      .when('LINKFYRIRLOGINDOITLATERYOUSEXYBABES', {
        controller: 'LoginController',
        templateUrl: 'views/login.html'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }]);
