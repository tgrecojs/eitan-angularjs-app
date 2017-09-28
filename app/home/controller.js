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
  
  
 
    console.log($scope, crudAPIFactory.getJobs().then(x => console.log('value from promise', x)));
}]);