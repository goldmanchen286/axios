const axios = require('axios');

console.log('Axios version:', axios.VERSION);

axios({
  url: 'http://localhost:12345', // A URL that won't connect but will timeout
  method: 'GET',
  timeout: 1000,
  timeoutErrorMessage: 'Custom timeout message here!',
  transitional: {
    clarifyTimeoutError: true
  }
})
  .then(res => console.log('Success:', res.data))
  .catch(err => {
    console.error('Error occurred:');
    console.error('- Message:', err.message);
    console.error('- Code:', err.code);
    console.error('- Config timeout message:', err.config.timeoutErrorMessage);
    console.error('- Config transitional:', JSON.stringify(err.config.transitional));
  });