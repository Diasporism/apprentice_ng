'use strict';

/**
 * @ngdoc function
 * @name mentorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mentorApp
 */
angular.module('mentorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
