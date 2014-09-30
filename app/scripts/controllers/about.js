'use strict';

/**
 * @ngdoc function
 * @name mentorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mentorApp
 */
angular.module('mentorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
