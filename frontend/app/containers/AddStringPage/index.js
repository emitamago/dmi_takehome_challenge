/*
 * FeaturePage
 *
 * List all the features
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H1 from 'components/H1';

import { addNewString, changeNewString } from './actions';
import { makeSelectNewString } from './selectors';

import messages from './messages';
import Form from './Form';
import Input from './Input';
import reducer from './reducer';
import saga from './saga';

const key = 'addStringPage';

export function AddStringPage({ onSubmitForm, onChangeNewString, newString }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <div>
      <Helmet>
        <title>Add String Page</title>
        <meta name="description" content="Add String" />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.addStringHeader} />
      </H1>
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="newString">
          <FormattedMessage {...messages.addStringMessage} />
          <Input
            id="newString"
            type="text"
            value={newString}
            onChange={onChangeNewString}
          />
        </label>
      </Form>
    </div>
  );
}

AddStringPage.propTypes = {
  onAddString: PropTypes.func,
  onChangeNewString: PropTypes.func,
  newString: PropTypes.string,
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newString: makeSelectNewString(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeNewString: evt => dispatch(changeNewString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addNewString());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddStringPage);
