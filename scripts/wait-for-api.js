const axios = require('axios');

const checkEndpoint = async () => {
  const payload = {
    email: "ash_winter@hotmail.co.uk",
    password: "bibble"
  };

  try {
    await axios.post('http://127.0.0.1:3000/v1/auth/login', payload);
    console.log('API endpoint is ready');
    process.exit(0);
  } catch (error) {
    if (error.response && (error.response.status === 200 || error.response.status === 201 || error.response.status === 404)) {
      console.log('API endpoint is ready');
      process.exit(0);
    }
    console.log('API endpoint is not ready yet, retrying...');
    setTimeout(checkEndpoint, 5000);
  }
};

checkEndpoint();