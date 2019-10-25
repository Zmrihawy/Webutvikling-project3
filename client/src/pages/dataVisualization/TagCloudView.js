import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";

import "./tag-cloud-style.css";

/**
 * The actual tag cloud view. This is a general React component for
 * viewing data, it accepts an object where each key is the string 
 * to be displayed and each value is the font size weight. The value
 * is projected to be in a satisfying range for font sizes
 */
class TagCloudView extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  render() {
    // componentStatistics is an object where each key is the name of a statistics and each value is the number
    // of objects in the db by that statistics
    const { statistics } = this.props;
    let mappedProjectedVals = [];
    if (statistics) {
      const statisticsValues = Object.keys(statistics).map(
        statistic => statistics[statistic]
      );
      const oldMax = Math.max(...statisticsValues);
      const oldMin = Math.min(...statisticsValues);
      const oldRange = oldMax - oldMin;
      const newMin = 10;
      const newMax = 100;
      const newRange = newMax - newMin;
      // Create a new array of objects, where each object contains the name of the statistics and the projected count value
      const projectedVals = Object.keys(statistics).map(statistic => {
        let oldVal = statistics[statistic];
        let newVal = ((oldVal - oldMin) * newRange) / oldRange + newMin;
        return { statistic, value: newVal };
      });
      // Map to JSX
      mappedProjectedVals = projectedVals.map((object, i) => (
        <div key={i} style={{ fontSize: object.value }}>
          {object.statistic}
        </div>
      ));
    }

    return (
      <div className="app-outer">
        <div className="app-inner">
          <TagCloud
            className="tag-cloud"
            style={{
              fontFamily: "sans-serif",
              fontSize: 30,
              color: () => randomColor(),
              padding: 5
            }}
          >
            {mappedProjectedVals}
          </TagCloud>
        </div>
      </div>
    );
  }
}

export default TagCloudView;
