import {AUTH_NOT_LOGGED_IN_ERROR} from '../constants/actionTypes';

export const auth0MiddlewareFactory = actionsWhitelist => {
  return function({getState}) {
    return next => {
      return action => {
        if (actionsWhitelist.includes(action.type)) {
          // White-listed calls do not require auth
          return next(action);
        } else {
          // Non white-listed calls should fail on a bad or expired token
          let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
          if (new Date().getTime() < expiresAt) {
            return next(action);
          } else {
            return next({
              type: AUTH_NOT_LOGGED_IN_ERROR,
              payload: {
                action
              }
            });
          }
        }
      };
    };
  };
};

export default auth0MiddlewareFactory;
