angular.module('myApp.factories', []).factory('jobFactory', () => {
    const service = {};
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
  
    const resetForm = () => {
      let newJob = {
          title: '',
          company: '',
          location: ''
      };
  }
  
    const addJob = (newJob) => {
      service.jobs.push(newJob);
      resetForm();
    };
  
    return service;
    // return { service, addJob}
  });
  