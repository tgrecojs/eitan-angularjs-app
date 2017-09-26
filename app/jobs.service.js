app.factory('myFactory', function () {
  const service = {};
  const jobs = [{
    title: 'Frontend Engineer',
    company: 'Facebook',
    location: 'San Francisco'
  },
  {
    title: 'Backend Engineer',
    company: 'AirBnB',
    location: 'San Francisco'
  },
  {
    title: 'Frontend Developer',
    company: 'Drobox',
    location: 'New York City'
  }]

  service.getJobs = function () {
    return jobs;
  }
  return service
})
