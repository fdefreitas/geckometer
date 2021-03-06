'use strict';

/**
 * @ngdoc overview
 * @name geckometerApp
 * @description
 * # geckometerApp
 *
 * Main module of the application.
 */
angular
  .module('geckometerApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
