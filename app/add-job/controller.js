'use strict';

angular.module('myApp.AddJob', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-job', {
    templateUrl: 'add-job/template.html',
    controller: 'AddJobCtrl'
  });
}])


.controller('AddJobCtrl', ['$scope', '$http',
    function(
      $scope, $http) {
  /** 
   * 
  }*/
  
 
  const resetForm = () => {
      $scope.newJob = {
          title: '',
          location: '',
          company: ''
      };
  }
   const addJob = (newJob) => {
    $http.post('http://localhost:4000/jobs', { data: newJob});
    resetForm();
  };
  // add to $scope so we can use in template
  $scope.addJob = addJob;
  // console.log('scope', $scope);
}])

