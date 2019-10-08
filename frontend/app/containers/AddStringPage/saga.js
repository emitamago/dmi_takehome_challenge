/**
 * Add new string to backend server t
 */

import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';

import { stringAdded, stringAddedError } from 'containers/App/actions';
import { clearNewString } from './actions'
import { ADD_NEWSTRING } from './constants';

import { makeSelectNewString } from './selectors';

/**
 * Add new string server, update redux store state,
 * clear input field and redirect to homepage
 */
export function* addString() {
  // Select string to add
  const newString = yield select(makeSelectNewString());
  // creat request url
  const requestURL = `http://localhost:3001/strings`;

  try {
    const updatedStrings = yield call(request, requestURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        newString,
      }),
    });

    // update redux store strings with updated strings
    yield put(stringAdded(updatedStrings));
    // clear input field
    yield put(clearNewString());
    // redirect to home page
    yield put(push('/'));
  } catch (err) {
    yield put(stringAddedError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* addNewStringToServer() {
  // Watches for ADD_NEWSTRING actions and calls addString when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_NEWSTRING, addString);
}

