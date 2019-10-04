/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  loading_strings: false,
  error: false,
  error_strings: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  stringsData: {
    array: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_STRINGS:
        draft.loading_strings = true;
        draft.error_strings = false;
        draft.stringsData.array = false;
        break;

      case LOAD_STRINGS_SUCCESS:
        draft.stringsData.array = action.strings;
        draft.loading_strings = false;
        break;

      case LOAD_STRINGS_ERROR:
        draft.error_strings = action.error;
        draft.loading_strings = false;
        break;
    }
  });

export default appReducer;
