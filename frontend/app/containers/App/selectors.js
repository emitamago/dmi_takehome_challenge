/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;
console.log(selectGlobal)

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

/** String API test */
const makeSelectLoadingStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading_Strings,
  );

const makeSelectErrorStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error_Strings,
  );

const makeSelectStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.stringsData.array,
  );

const makeSelectLocationStrings = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location.strings,
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectLoadingStrings,
  makeSelectStrings,
  makeSelectErrorStrings,
  makeSelectLocationStrings,
};
