export default {
  oAuthApiEndpoint:
    process.env.REACT_APP_O_AUTH_API_ENDPOINT ||
    'https://hellopresent.auth0.com',
  oAuthClientId:
    process.env.REACT_APP_O_AUTH_CLIENT_ID ||
    'LRlctVCXDJ0SjU11vojgheLkTsT56mq7',
  oAuthDomain: process.env.REACT_APP_O_AUTH_DOMAIN || 'hellopresent.auth0.com',
  helloPresentApiEndpoint:
    process.env.REACT_APP_HELLO_PRESENT_API_ENDPOINT ||
    'http://168.61.150.190:60001'
  // helloPresentApiEndpoint: 'http://localhost:5000'
};
