/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'dmi.containers.HomePage';

export default defineMessages({
  stringsHeader: {
    id: `${scope}.string.header`,
    defaultMessage: 'Welcome to Our Strings Page',
  },
  stringsMessage: {
    id: `${scope}.strings.message`,
    defaultMessage: 'Please enjoy our awesome collection of strings!',
  },
  addStringHeader: {
    id: `${scope}.addString.header`,
    defaultMessage: 'Add your favorite string!',
  },
  addStringMessage: {
    id: `${scope}.addString.message`,
    defaultMessage: 'Please type your string  ',
  },
});
