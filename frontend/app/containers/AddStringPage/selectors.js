import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddStringPage = state => state.addStringPage || initialState;

const makeSelectNewString = () =>
  createSelector(
    selectAddStringPage,
    addStringPageState => addStringPageState.newString,
  );

export { selectAddStringPage, makeSelectNewString };
