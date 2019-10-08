import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

import { loadStrings, stringLoaded, stringsLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadStrings', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_STRINGS,
      };

      expect(loadStrings()).toEqual(expectedResult);
    });
  });

  describe('stringLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: LOAD_STRINGS_SUCCESS,
        strings: fixture,
      };

      expect(stringLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('stringsLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_STRINGS_ERROR,
        error: fixture,
      };

      expect(stringsLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
