'use strict';

/**
 * @ngdoc function
 * @name beerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerApp
 */
angular.module('beerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
