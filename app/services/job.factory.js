angular.module('myApp.factories', []).factory('jobFactory', () => {
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
  
    const addJob = (newJob) => {
      resetForm();
      service.jobs.push(newJob);
    };
    // service = { jobs : [....]}

    service.addJob = addJob;
  
    return service;
    // return { service, addJob}
  });
  