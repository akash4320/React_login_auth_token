import axios from 'axios';

export const LoginApi = (payload) => {
  const URL = `http://192.168.0.112:3002/api/user/login`;
  return axios(URL, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json', // whatever you want
    },
    data: JSON.stringify(payload),
  })
};