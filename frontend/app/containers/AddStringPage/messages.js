/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'dmi.containers.AddString';

export default defineMessages({
  addStringHeader: {
    id: `${scope}.addString.header`,
    defaultMessage: 'Add String',
  },

  addStringMessage: {
    id: `${scope}.addString.message`,
    defaultMessage: `Please add your favorite string to our system  `,
  },
});
