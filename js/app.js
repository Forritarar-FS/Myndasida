var app = angular.module('MyndaApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "MainController",
      templateUrl: "views/homepage.html"
    })
    .when('/comment/:id', {
      controller: 'CommentController',
      templateUrl: 'views/comment.html'
    })
    .when('LINKFYRIRLOGINDOITLATERYOUSEXYBABES', {
      controller: 'LoginController',
      templateUrl: 'views/login.html'
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/signup', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterController'
      })
      .when('/homepage', {
        controller: "MainController",
        templateUrl: "views/homepage.html"
      })
      .otherwise({
        redirectTo: '/'
    });
});
  