angular.module('myApp.factories', [])
  .factory('crudAPIFactory', function($rootScope, $http) {
    
      var crudFactory = {};
    
      //Get Company List
      crudFactory.getJobs = function() {
        return $http({
              url: "http://localhost:4000/jobs",
              method: 'GET'
             });
      };

      crudFactory.jobsWereUpdated = function() {
        $rootScope.$broadcast('update');
      }
    
      return crudFactory;
    });
  