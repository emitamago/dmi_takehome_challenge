/*
 * App Actions
 *
 */

import {
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

/* Actions for adding new string to  backend API */
export function addString() {
  return {
    type: ADD_STRING,
  };
}

export function stringAdded(newStrings) {
  return {
    type: ADD_STRING_SUCCESS,
    newStrings,
  };
}

export function stringAddedError(error) {
  return {
    type: ADD_STRING_ERROR,
    error,
  };
}

/* Actions for fetching all strings from backend API */
export function loadStrings() {
  return {
    type: LOAD_STRINGS,
  };
}

export function stringLoaded(strings) {
  return {
    type: LOAD_STRINGS_SUCCESS,
    strings,
  };
}

export function stringsLoadingError(error) {
  return {
    type: LOAD_STRINGS_ERROR,
    error,
  };
}
