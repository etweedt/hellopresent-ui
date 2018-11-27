import config from '../constants/config';
import axios from 'axios';

class HelloPresentApi {
  static getUserInfo(email) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.helloPresentApiEndpoint}/users/${email}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static updateUserInfo(email, userInfo) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${config.helloPresentApiEndpoint}/users/${email}`, {
          user: userInfo
        })
        .then(response => {
          console.log(response);
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getViewableWishlistsForUser(email) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.helloPresentApiEndpoint}/wishlists/${email}`)
        .then(response => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getUsersWishlist(email) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.helloPresentApiEndpoint}/wishlists/user/${email}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export default HelloPresentApi;
