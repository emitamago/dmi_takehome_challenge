/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  strings: {
    id: `${scope}.Strings`,
    defaultMessage: 'strings',
  },
  addStrings: {
    id: `${scope}.Add String`,
    defaultMessage: 'Add String',
  },
});
