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

    $scope.beer = {	"name" : "Piraat",
    				"description" : "Piraat is a Belgian pale ale, made by Van Steenberge brewery. It contains 10.5% alcohol, is hoppy, and is described as \"powerful\" with \"lots of subtle flavors.\"",
    				"image_url" : "https://coxrare.files.wordpress.com/2014/01/piraat.jpg"}
  });
