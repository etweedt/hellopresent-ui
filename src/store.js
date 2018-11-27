import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import rootReducer from './reducers';
import authMiddleware from './middleware/auth0Middleware';
import * as types from './constants/actionTypes';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const actionsWhitelist = [
    types.AUTH_NOT_LOGGED_IN_ERROR,
    types.AUTH_RETRIEVE_PROFILE_STARTED,
    types.AUTH_RETRIEVE_PROFILE_COMPLETED,
    types.AUTH_RETRIEVE_PROFILE_ERROR
  ];

  const middlewares = [sagaMiddleware, authMiddleware(actionsWhitelist)];
  let store;

  if (process.env.NODE_ENV === 'production') {
    store = createStore(rootReducer, applyMiddleware(...middlewares));
  } else {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(...middlewares))
    );
  }

  sagaMiddleware.run(sagas);
  return store;
};
