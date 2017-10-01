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

.controller('HomeController', ['$scope','crudAPIFactory', 
'$http',
function($scope, crudAPIFactory, $http) {
  

  const getJobs = () => crudAPIFactory.getJobs().then(x => {
      const data = x.data;
      console.log('Data from promis', data);
      $scope.jobs = data.jobs;
      return $scope.jobs;
    });
  getJobs();

  const removeJob = id => $http.delete(`http://localhost:4000/jobs/${id}`).then(res => {
    console.log('res from removeJob', res);
    return crudAPIFactory.jobsWereUpdated()
});
$scope.removeJob = removeJob;

$scope.$on('update', () => getJobs());
}]);