import React from 'react';
import { connect } from 'react-redux';

import TagCloudHeader from './TagCloudHeader';

const TagCloudPage = props => {
  return (
    <TagCloudHeader/>
  )
}


export default TagCloudPage;
// function mapStateToProps(state) {
//   const { component } = state;
//   return { featuredComponents: component.featuredComponents };
// }

// const actionCreators = {
//   getFeaturedComponents
// };

// export default connect(
//   mapStateToProps,
//   actionCreators
// )(HomePage);
