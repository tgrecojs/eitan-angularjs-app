angular.module('myApp.factories', []).factory('jobFactory', ($http) => {
  const service = {};
    // ATM - service = { }
    service.jobs = [{
      title : 'Job 1',
      location: 'NYC',
      company: 'Facebook'
    },
    {
      title : 'Job 2',
      location: 'NYC',
      company: 'Google'
    },
    {
      title : 'Job 3',
      location: 'SF',
      company: 'Facebook'
    }];
    // service = { jobs : [....]}

    const resetForm = () => {
      let newJob = {
          title: '',
          company: '',
          location: ''
      };
  } 

  const getJobs = () => {
    $http({
      method: 'GET',
      url: 'http://localhost:3000/jobs'
  }).then(res => { 
    const jobs = res.data.jobs;
    return jobs;
  })
  .catch(err => new Error(err));
  };

    const addJob = (newJob) => {
      resetForm();
      service.jobs.push(newJob);
    };
    // service = { jobs : [....]}

    service.addJob = addJob;
    service.getJobs = getJobs;
  
    return service;
    // return { service, addJob}
  })
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
  