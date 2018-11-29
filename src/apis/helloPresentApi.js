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

  static getAllUsers() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.helloPresentApiEndpoint}/users`)
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

  static claimItem(email, wishlistId, itemId) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${config.helloPresentApiEndpoint}/wishlists/items/claim`, {
          userId: email,
          wishlistId,
          itemId
        })
        .then(response => {
          resolve(response.data.wishlist);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static unclaimItem(email, wishlistId, itemId) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${config.helloPresentApiEndpoint}/wishlists/items/unclaim`, {
          userId: email,
          wishlistId,
          itemId
        })
        .then(response => {
          resolve(response.data.wishlist);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getUserClaims(email) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.helloPresentApiEndpoint}/wishlists/claims/${email}`)
        .then(response => {
          resolve(response.data.claims);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static getUserGroupMembers(userEmail) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.helloPresentApiEndpoint}/groups/${userEmail}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static addMemberToUserGroup(userEmail, memberEmail) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${config.helloPresentApiEndpoint}/groups/${userEmail}`, {
          memberId: memberEmail
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static removeMemberFromUserGroup(userEmail, memberEmail) {
    return new Promise((resolve, reject) => {
      axios
        .delete(
          `${config.helloPresentApiEndpoint}/groups/${userEmail}/${memberEmail}`
        )
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
