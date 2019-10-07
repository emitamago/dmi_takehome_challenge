/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import request from 'utils/request';

import { stringAdded, stringAddedError } from 'containers/App/actions';
import { clearUsername } from './actions'
import { ADD_NEWSTRING } from './constrains';

import { makeSelectNewString } from './selectors';


/**
 * Github repos request/response handler
 */
export function* addString() {
  // Select username from store4
  
  const newString = yield select(makeSelectNewString());
  const requestURL = `http://localhost:3001/strings`;
 
  try {
    // Call our request helper (see 'utils/request')
    const updatedStrings = yield call(request, requestURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        newString,
      }),
    });
    yield put(stringAdded(updatedStrings));
    yield put(clearUsername());
    yield put(push('/'));
  } catch (err) {
    yield put(stringAddedError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_NEWSTRING, addString);
}

