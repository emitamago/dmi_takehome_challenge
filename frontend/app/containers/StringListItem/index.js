/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from 'components/ListItem';

export function StringListItem(props) {
  const { item } = props;

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item}`} item={item} />;
}

StringListItem.propTypes = {
  item: PropTypes.string,
};

export default connect()(StringListItem);
