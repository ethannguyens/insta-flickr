/*eslint-disable no-console */

import browsers from './browsers';
import sauceCredentials from './sauce-credentials';


const easySauce = require('easy-sauce');

easySauce({
            username: sauceCredentials.username,
            key: sauceCredentials.key,
            platforms: [browsers.chrome
            ],
            "port": "5000",
            "testPath": "/test.html",
            "service": "sauce-connect",
            "serviceOptions": {
              "verbose": true
            }
          })
  .on('message', function (message) {
    // A message has been emitted, inform the user.
    console.log(message);
  })
  .on('update', function (job) {
    // A job's status has been updated
    console.log(job.status);
  })
  .on('done', function (passed, jobs) {
    // All tests have completed!
    if (passed) {
      console.log('All tests passed!');
    }
    else {
      console.log('Oops, there were failures:\n' + jobs);
    }
  })
  .on('error', function (err) {
    // An error occurred at some point running the tests.
    console.error(err.message);
  });