/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringLoaded, stringsLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Strings request/response handler
 */
export function* getStrings() {
  const requestURL = `http://localhost:3001/strings`;
  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, requestURL);
    yield put(stringLoaded(strings));
  } catch (err) {
    yield put(stringsLoadingError(err));
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
  yield takeLatest(LOAD_STRINGS, getStrings);
}
