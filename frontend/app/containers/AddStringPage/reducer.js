import produce from 'immer';
import { CLEAR_NEWSTRING, CHANGE_NEWSTRING } from './constants';

export const initialState = {
  newString: '',
};

/* eslint-disable default-case, no-param-reassign */
const addStringPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NEWSTRING:
        console.log("i am her at change reducer")
        draft.newString = action.newString;
        break;
      case CLEAR_NEWSTRING:
        console.log("I am here at clear reducer")
        draft.newString = '';
        break;
    }
  });
export default addStringPageReducer;
