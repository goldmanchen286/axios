const axios = require('axios');

axios({
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  method: 'GET',
  timeoutErrorMessage: 'Request timed out!' // Works now with axios 1.9.0
})
  .then(res => console.log('Data:', res.data))
  .catch(err => console.error('Error:', err.message));
