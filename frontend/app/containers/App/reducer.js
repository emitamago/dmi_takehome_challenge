/*
 * AppReducer
 *
 */

import produce from 'immer';
import {
  ADD_STRING_ERROR,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  addingString: false,
  loading_strings: false,
  error_add_string: false,
  error_strings: false,
  stringsData: {
    array: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_STRING:
        draft.addingString = true;
        draft.error = false;
        draft.stringsData.array = false;
        break;

      case ADD_STRING_SUCCESS:
        draft.stringsData.array = action.strings;
        draft.loading = false;
        break;

      case ADD_STRING_ERROR:
        draft.error_add_string = action.error;
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
