/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectLoadingStrings,
  makeSelectErrorStrings,
  makeSelectStrings,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import CenteredSection from './CenteredSection';

import Section from './Section';
import messages from './messages';
import { loadStrings } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  strings,
  loadingStrings,
  errorStrings,
  loadStringFromApi,
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    loadStringFromApi();
  }, []);

  const stringsListProps = {
    loadingStrings,
    errorStrings,
    strings,
  };

  return (
    <article>
      <Helmet>
        <title>Strings</title>
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.stringsHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.stringsMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.addStringHeader} />
          </H2>
          <ReposList {...stringsListProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loadStringFromApi: PropTypes.func,
  loadingStrings: PropTypes.bool,
  errorStrings: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loadingStrings: makeSelectLoadingStrings(),
  errorStrings: makeSelectErrorStrings(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadStringFromApi: () => dispatch(loadStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
