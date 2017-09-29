'use strict';

// ngResource is throwing an error
// to see error, uncomment out in index.html
angular.module('myApp.home', ['ngRoute',
  // ngResource
])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/template.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$scope','crudAPIFactory', function($scope, crudAPIFactory) {
  

    
  crudAPIFactory.getJobs().then(x => {
      const data = x.data;
      console.log('Data from promis', data);
      $scope.jobs = data.jobs;
      return $scope.jobs;
    });
}]);