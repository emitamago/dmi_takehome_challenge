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
        draft.newString = action.newString;
        break;
      case CLEAR_NEWSTRING:
        draft.newString = '';
        break;
    }
  });
export default addStringPageReducer;
