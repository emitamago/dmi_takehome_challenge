/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import Form from './Form';
import Input from './Input';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Add String Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      {/* <Form onSubmit={onSubmitForm}>
            <label htmlFor="newString">
              <FormattedMessage {...messages.addStringMessage} />
              <Input
                id="newString"
                type="text"
                value={username}
                onChange={onChangeUsername}
              />
            </label>
          </Form> */}
    </div>
  );
}

// FeaturePage.propTypes = {
//   onSubmitForm: PropTypes.func,
//   onChangeUsername: PropTypes.func,
// };

// const mapStateToProps = createStructuredSelector({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
//   strings: makeSelectStrings(),
//   loading_strings: makeSelectLoadingStrings(),
//   error_strings: makeSelectErrorStrings(),
// });

// export function mapDispatchToProps(dispatch) {
//   return {
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//     loadStringFromApi: () => dispatch(loadStrings()),
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// export default compose(
//   withConnect,
//   memo,
// )(FeaturePage);
