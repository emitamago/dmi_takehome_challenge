import produce from 'immer';

import appReducer from '../reducer';
import { loadStrings, stringLoaded, stringsLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      addingString: false,
      loading_strings: false,
      error_add_string: false,
      error_strings: false,
      stringsData: {
        array: false,
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadStrings action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading_strings = true;
      draft.error_strings = false;
      draft.stringsData.array = false;
    });

    expect(appReducer(state, loadStrings())).toEqual(expectedResult);
  });

  it('should handle the stringLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My string',
      },
    ];

    const expectedResult = produce(state, draft => {
      draft.stringsData.array = fixture;
      draft.loading_strings = false;
    });

    expect(appReducer(state, stringLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the stringsLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error_strings = fixture;
      draft.loading_strings = false;
    });

    expect(appReducer(state, stringsLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
