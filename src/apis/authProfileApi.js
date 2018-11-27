import axios from 'axios';
import config from '../constants/config';

class AuthProfileApi {
  static getAuthProfile() {
    const endpoint = config.oAuthApiEndpoint;
    const token = localStorage.getItem('access_token');

    let payload = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    return new Promise((resolve, reject) => {
      axios
        .post(`${endpoint}/userinfo`, {}, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject('Error getting auth profile information ' + err);
        });
    });
  }
}

export default AuthProfileApi;
