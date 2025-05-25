const axios = require('axios');

// With axios 1.9.0, we can use timeoutErrorMessage but it requires
// clarifyTimeoutError set to true in transitional options to work correctly
axios({
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  method: 'GET',
  timeout: 5000, 
  timeoutErrorMessage: 'Request timed out!', // Custom error message on timeout
  transitional: {
    clarifyTimeoutError: true
  }
})
  .then(res => console.log('Data:', res.data))
  .catch(err => console.error('Error:', err.message));
