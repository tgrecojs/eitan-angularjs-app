angular.module('crudFactoryApp.crudFactory', [])
.factory('crudAPIFactory', function($http) {

  var crudFactory = {};

  //Get Company List
  crudFactory.getJobs = function() {
    return $http({
          url: "http://localhost:3000/jobs",
          method: 'GET'
         });
  };

  //Insert new Company.
  crudFactory.createCompany = function (Company) {
    return $http({
          url: 'http://localhost:3000/createcompany/',
          method: 'POST',
          data : Company
      });
  };



  //Update Company.
   crudFactory.updateCompany = function (Company) {
        return  $http({
          url: 'http://localhost:3000/updatecompany/',
          method: 'POST',
          data : Company,
      });
      };

  //Delete Company.
  crudFactory.deletecompany = function (Company) {
   return  $http({
          url: 'http://localhost:3000/deletecompany/'+ Company.companyId,
          method: 'GET',
      });
  };    

  return crudFactory;
});