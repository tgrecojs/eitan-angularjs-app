'use strict';

angular.module('myApp.AddJob', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/AddJob', {
    templateUrl: 'add-job/template.html',
    controller: 'AddJobCtrl'
  });
}])

.controller('AddJobCtrl', ['$scope',  'jobFactory', function($scope, jobFactory) {

  $scope.jobs = jobFactory.jobs;
 
  const resetForm = () => {
      $scope.newJob = {
          title: '',
          location: '',
          company: ''
      };
  }
   const addJob = (job) => {
    $scope.jobs.push(job);
    resetForm()
  };

  $scope.addJob = addJob;

}])

