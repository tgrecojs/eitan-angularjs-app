'use strict';

angular.module('myApp.AddJob', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-job', {
    templateUrl: 'add-job/template.html',
    controller: 'AddJobCtrl'
  });
}])


.controller('AddJobCtrl', ['$scope', '$http','jobFactory',
    function(
      $scope, 
      $http, 
      jobFactory) {
  /** jobFactory (service) = { 
      jobs: [....],
      addJob: fun
  }*/
  
 
  const resetForm = () => {
      $scope.newJob = {
          title: '',
          location: '',
          company: ''
      };
  }
   const addJob = (newJob) => {
    return $http.post('http://localhost:4000/jobs', { data: newJob});
    resetForm();
  };

  $scope.addJob = addJob;
//
  console.log('scope', $scope);
}])

