/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';

export function RepoListItem(props) {
  const { item } = props;

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item}`} item={item} />;
}

RepoListItem.propTypes = {
  item: PropTypes.string,
  currentUser: PropTypes.string,
};

export default connect(
)(RepoListItem);
