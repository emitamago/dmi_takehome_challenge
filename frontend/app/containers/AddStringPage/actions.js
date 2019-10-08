import { ADD_NEWSTRING, CHANGE_NEWSTRING, CLEAR_NEWSTRING } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} newString The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_NEWSTRING
 */
export function changeNewString(newString) {
  return {
    type: CHANGE_NEWSTRING,
    newString,
  };
}

export function clearNewString() {
  return {
    type: CLEAR_NEWSTRING,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} newstring The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function addNewString() {
  return {
    type: ADD_NEWSTRING,
  };
}
