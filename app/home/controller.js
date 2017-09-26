'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'home/template.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$scope',  'jobFactory', function($scope, jobFactory) {
    $scope.jobs = jobFactory.jobs;
}]);