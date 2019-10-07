/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectAddStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.addingString,
  );
const makeSelectErrorStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error_Strings,
  );

const makeSelectLoadingStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading_Strings,
  );

const makeSelectErrorAddStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error_add_string,
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
  makeSelectLocation,
  makeSelectAddStrings,
  makeSelectErrorAddStrings,
  makeSelectLoadingStrings,
  makeSelectStrings,
  makeSelectErrorStrings,
  makeSelectLocationStrings,
};
