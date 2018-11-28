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
          resolve(response.data.wishlist);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static updateUsersWishlist(email, wishlist) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${config.helloPresentApiEndpoint}/wishlists/user/${email}`, {
          wishlist
        })
        .then(response => {
          resolve(response.data.wishlist);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getUserGroupMembers(email) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.helloPresentApiEndpoint}/users/group/${email}`)
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
