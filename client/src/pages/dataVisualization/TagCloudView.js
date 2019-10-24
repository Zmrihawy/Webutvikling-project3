import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

const styles = {
  large: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

class TagCloudView extends Component {

  render() {

    return (

      <div>
        <h3> This is the view </h3>
        <TagCloud 
          style={{
                fontFamily: 'sans-serif',
                fontSize: 30,
                fontWeight: 'bold',
                fontStyle: 'italic',
                color: () => randomColor(),
                padding: 5,
                width: '100%',
                height: '100%'
            }}>
              <div style={{fontSize: 50}}>react</div>
              <div style={{color: 'green'}}>tag</div>
              <div rotate={90}>cloud</div>
                  ...
        </TagCloud>
        <h3> This is the end of the view </h3>
      </div>
    );
  }

}

export default TagCloudView;
