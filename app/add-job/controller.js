'use strict';

angular.module('myApp.AddJob', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-job', {
    templateUrl: 'add-job/template.html',
    controller: 'AddJobCtrl'
  });
}])


.controller('AddJobCtrl', ['$scope', 'jobFactory',
    function($scope, jobFactory) {
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
   const addJob = (job) => {
    $scope.myJobs.push(job);
    resetForm()
  };

  $scope.addJob = jobFactory.addJob;
//
  console.log('scope', $scope);
}])

