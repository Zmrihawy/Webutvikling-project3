import React from 'react';
import { connect } from 'react-redux';

import TagCloudHeader from './TagCloudHeader';
import TagCloudView from './TagCloudView';

const TagCloudPage = props => {
  return (
    <div>
      <TagCloudHeader/>
      <TagCloudView/>
    </div>
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
