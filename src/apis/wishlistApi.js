// import axios from 'axios';
import clone from '../utils/deepClone';

const users = [
  {
    email: 'erock@gmail.com',
    password: 'test',
    firstName: 'Eric',
    lastName: 'Tweedt',
    address: '5137 Woodridge Rd.\nMinnetonka, MN 55345'
  },
  {
    email: 'jsmith@fakemail.com',
    password: 'test',
    firstName: 'John',
    lastName: 'Smith',
    address: ''
  },
  {
    email: 'jdoe@fakemail.com',
    password: 'test',
    firstName: 'Jane',
    lastName: 'Doe',
    address: ''
  }
];
const userWishlists = [
  {
    email: 'erock@gmail.com',
    items: [
      {
        name: 'Sega Genesis',
        description: 'A classic gaming console',
        url: 'http://www.sega.com/',
        notes: 'I need this classic console specifically from Amazon.com.',
        priceTier: 4,
        claimedBy: ''
      },
      {
        name: 'XBox 360 RROD Repair Kit',
        description:
          'A took kit for repairing the red ring of death on my Xbox 360.',
        url: 'https://goo.gl/YhrpGy',
        notes: '',
        priceTier: 3,
        claimedBy: ''
      },
      {
        name: 'Rain Coat',
        description: 'A stylish jacket to keep me dry.',
        url: 'http://a.co/dPloNWc',
        notes: 'I likely wear an XL, but might fit into a L.',
        priceTier: 2,
        claimedBy: ''
      },
      {
        name: 'Socks',
        description: 'Ankle socks.',
        url: '',
        notes: '',
        priceTier: 2,
        claimedBy: ''
      }
    ]
  },
  {
    email: 'jsmith@fakemail.com',
    items: [
      {
        name: 'Marbles',
        description: 'The game with the little balls.',
        url:
          'https://www.amazon.com/dp/B01L8GHS8G/ref=cm_sw_r_cp_ep_dp_QRDoAb1NTSPQY',
        notes: 'Nothing special.',
        priceTier: 1,
        claimedBy: ''
      },
      {
        name: 'Power Wheels',
        description: 'Rollin in style.',
        url: 'http://a.co/8R2YkOm',
        notes: 'Gotta be the TMNT one.',
        priceTier: 5,
        claimedBy: ''
      },
      {
        name: 'The thing I really want',
        description: 'I need dis.',
        url: '',
        notes: 'If you get me anything, get me this.',
        priceTier: 3,
        claimedBy: 'erock@gmail.com'
      },
      {
        name: 'The thing someone else is getting me',
        description: 'You cannot claim this because someone else already did.',
        url: '',
        notes: 'Too bad',
        priceTier: 2,
        claimedBy: 'jdoe@fakemail.com'
      }
    ]
  },
  {
    email: 'jdoe@fakemail.com',
    items: [
      {
        name: 'Hippo',
        description: 'I want a hippopotamus for christmas.',
        url: '',
        notes: 'Only a hippopotamus will do.',
        priceTier: 7,
        claimedBy: ''
      }
    ]
  }
];

class WishlistApi {
  static getNonUserWishlists(email) {
    return new Promise((resolve, reject) => {
      try {
        const lists = clone(userWishlists);
        const found = lists.find(l => {
          return l.email === email;
        });
        if (found) {
          lists.splice(lists.indexOf(found), 1);
        }

        lists.forEach(list => {
          const user = users.find(u => {
            return u.email === list.email;
          });

          list.firstName = user.firstName;
          list.lastName = user.lastName;
          list.address = user.address;
        });

        resolve(lists);
      } catch (e) {
        reject(e.message);
      }
    });
  }

  static getUserWishlist(email) {
    return new Promise((resolve, reject) => {
      try {
        const found = userWishlists.find(u => {
          return u.email === email;
        });
        if (found) {
          resolve(found);
        } else {
          reject('User not found!');
        }
      } catch (e) {
        reject(e.message);
      }
    });
  }

  static addItemToUserWishlist(email, item) {
    return new Promise((resolve, reject) => {
      try {
        const found = userWishlists.find(u => {
          return u.email === email;
        });
        if (found) {
          found.items.push(item);
          resolve(clone(item));
        } else {
          reject('User not found!');
        }
      } catch (e) {
        reject(e.message);
      }
    });
  }

  static editUserWishlistItem(email, item) {
    return new Promise((resolve, reject) => {
      try {
        const found = userWishlists.find(u => {
          return u.email === email;
        });
        if (found) {
          const oItem = found.items.find(i => {
            return i.name === item.name;
          });
          if (oItem) {
            oItem.description = item.description;
            oItem.url = item.url;
            oItem.notes = item.notes;
            oItem.priceTier = item.priceTier;
            resolve(clone(oItem));
          } else {
            reject('Item not found!');
          }
        } else {
          reject('User not found!');
        }
      } catch (e) {
        reject(e.message);
      }
    });
  }

  static deleteUserWishlistItem(email, itemName) {
    return new Promise((resolve, reject) => {
      try {
        const found = userWishlists.find(u => {
          return u.email === email;
        });
        if (found) {
          const oItem = found.items.find(i => {
            return i.name === itemName;
          });
          if (oItem) {
            found.items.splice(found.items.indexOf(oItem), 1);
            resolve(clone(oItem));
          } else {
            reject('Item not found!');
          }
        } else {
          reject('User not found!');
        }
      } catch (e) {
        reject(e.message);
      }
    });
  }

  static claimItem(email, item, itemOwner) {
    return new Promise((resolve, reject) => {
      try {
        const found = userWishlists.find(l => {
          return l.email === itemOwner;
        });
        if (found) {
          const oItem = found.items.find(i => {
            return i.name === item.name;
          });
          if (oItem) {
            oItem.claimedBy = email;
            resolve(clone(oItem));
          } else {
            reject('Item not found!');
          }
        } else {
          reject('Item owner not found!');
        }
      } catch (e) {
        reject(e.message);
      }
    });
  }

  static unclaimItem(email, item, itemOwner) {
    return new Promise((resolve, reject) => {
      try {
        const found = userWishlists.find(l => {
          return l.email === itemOwner;
        });
        if (found) {
          const oItem = found.items.find(i => {
            return i.name === item.name;
          });
          if (oItem) {
            oItem.claimedBy = '';
            resolve(clone(oItem));
          } else {
            reject('Item not found!');
          }
        } else {
          reject('Item owner not found!');
        }
      } catch (e) {
        reject(e.message);
      }
    });
  }

  static getUserClaims(email) {
    return new Promise((resolve, reject) => {
      try {
        const claims = [];

        userWishlists.forEach(list => {
          if (list.email !== email) {
            const found = users.find(u => {
              return u.email === list.email;
            });
            const claim = {
              email: list.email,
              userName: found.firstName + ' ' + found.lastName,
              items: []
            };

            list.items.forEach(item => {
              if (item.claimedBy === email) {
                claim.items.push(item);
              }
            });

            if (claim.items.length > 0) {
              claims.push(claim);
            }
          }
        });

        resolve(claims);
      } catch (e) {
        reject(e.message);
      }
    });
  }
}

export default WishlistApi;
