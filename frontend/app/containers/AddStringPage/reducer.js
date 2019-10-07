import produce from 'immer';
import { ADD_NEWSTRING, CHANGE_NEWSTRING } from './constrains';

export const initialState = {
  newString: '',
};

/* eslint-disable default-case, no-param-reassign */
const addStringPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NEWSTRING:
        console.log("I called reducer1111", newString)
        draft.newString = action.newString;
        break;
    }
  });
export default addStringPageReducer;
