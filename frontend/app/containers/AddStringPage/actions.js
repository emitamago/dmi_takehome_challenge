import { ADD_NEWSTRING, CHANGE_NEWSTRING } from './constrains';


/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(newString) {
    console.log("I am here for change")
  return {
    type: CHANGE_NEWSTRING,
    newString,
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
