import auth0 from 'auth0-js';
import config from '../constants/config';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: config.oAuthDomain,
    clientID: config.oAuthClientId,
    redirectUri: window.location.origin + '/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        window.location.href = window.location.origin;
        window.location.href = window.location.origin;
      } else if (err) {
        window.location.href = window.location.origin;
        console.error(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  };

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    window.location.href = window.location.origin;
  }

  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    window.location.href = window.location.origin;
  };

  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };
}
