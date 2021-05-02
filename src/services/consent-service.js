import axios from 'axios';

let baseUrl;

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'production_ser_url';
} else if (process.env.NODE_ENV === 'test') {
  baseUrl = 'test_server_url';
} else {
  baseUrl = 'http://localhost:3001/consents';
}

const getAll = async () => {
  const consents = await axios.get(baseUrl);
  return consents.data;
};

const createNew = async (consent) => {
  const savedConsent = await axios.post(baseUrl, consent);
  return savedConsent.data;
};

export default { getAll, createNew };
