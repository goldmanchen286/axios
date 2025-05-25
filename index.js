const axios = require('axios');

axios({
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  method: 'GET',
  timeoutErrorMessage: 'Request timed out!' // Used to work
})
  .then(res => console.log('Data:', res.data))
  .catch(err => console.error('Error:', err.message));
