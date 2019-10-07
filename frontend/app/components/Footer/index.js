/** Footer component */
import React from 'react';
import { FormattedMessage } from 'react-intl';

/** Styled components */
import A from 'components/A';
import Wrapper from './Wrapper';

/** Footer messages */
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://github.com/emitamago">Emi Tsukuda</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
