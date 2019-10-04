/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function addString() {
  return {
    type: ADD_STRING,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function stringAdded(repos, username) {
  return {
    type: ADD_STRING_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function stringAddedError(error) {
  return {
    type: ADD_STRING_ERROR,
    error,
  };
}

/** TESTING  API CALL TO BACKEND */
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
