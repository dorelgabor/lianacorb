'use strict';

/**
 * @ngdoc overview
 * @name lianacorbApp
 * @description
 * # lianacorbApp
 *
 * Main module of the application.
 */
angular
  .module('lianacorbApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/galerie', {
        templateUrl: 'views/galerie.html',
        controller: 'GalerieCtrl'
      })
      .when('/expozitii', {
        templateUrl: 'views/expozitii.html'
      })
      .when('/despre_mine', {
        templateUrl: 'views/despre_mine.html',
        controller: 'DespreCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
