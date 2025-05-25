const axios = require('axios');

// With axios 1.9.0, the timeoutErrorMessage requires clarifyTimeoutError
// setting to be enabled in the transitional options
axios({
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  method: 'GET',
  timeoutErrorMessage: 'Request timed out!', // Used to work
  transitional: {
    clarifyTimeoutError: true // Required in axios 1.9.0 for timeoutErrorMessage to work
  }
})
  .then(res => console.log('Data:', res.data))
  .catch(err => console.error('Error:', err.message));
