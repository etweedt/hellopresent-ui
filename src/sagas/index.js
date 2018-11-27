import {all} from 'redux-saga/effects';
import * as auth from './authSaga';

export default function* root() {
  yield all([auth.watchAuthProfileRetrieval()]);
}
