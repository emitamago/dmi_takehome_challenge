/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest, select, fetch} from 'redux-saga/effects';
import { ADD_NEWSTRING } from './constrains';
import { stringAdded, stringAddedError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectNewString } from './selectors';


/**
 * Github repos request/response handler
 */
export function* addString() {
  // Select username from store4
  console.log('I am called in add saga')
  
  const newString = yield select(makeSelectNewString());
  console.log(newString)
  const requestURL = `http://localhost:3001/strings`;
  const bodydata = {newString }
  try {
    // Call our request helper (see 'utils/request')
    const updatedStrings = yield call(request, requestURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          newString,
        })
      })
    yield put(stringAdded(updatedStrings));
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

