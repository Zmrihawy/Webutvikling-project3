import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import CloudItem from './CloudItem'

import './tag-cloud-style.css'

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
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  render() {

    const { componentStatistics } = this.props;
    console.log(componentStatistics);
    let mappedProjectedVals = [];
    if (componentStatistics) {
      const statisticsValues = Object.keys(componentStatistics).map(producer => componentStatistics[producer])

      // OldRange = (OldMax - OldMin)  
      // NewRange = (NewMax - NewMin)  
      // NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
      const oldMax = Math.max(...statisticsValues);
      const oldMin = Math.min(...statisticsValues);
      const oldRange = oldMax - oldMin;
      console.log("vals", statisticsValues);
      console.log("old max", oldMax)
      console.log("old min", oldMin)

      const newMin = 10;
      const newMax = 100;
      const newRange = newMax - newMin;


      const projectedVals = Object.keys(componentStatistics).map((producer) => {
        console.log(producer)
        let oldVal = componentStatistics[producer]
        let newVal = (((oldVal - oldMin) * newRange) / oldRange) + newMin
        console.log(newVal)
        return {producer, value: newVal}
      })

      console.log(projectedVals);

      mappedProjectedVals = projectedVals.map(object => (
        <div style={{fontSize: object.value}}>
          {object.producer}
        </div>
      ))
    }


    return (
      <div className='app-outer'>
        <div className='app-inner'>
          <h1>react-tag-cloud demo</h1>
          <TagCloud 
            className='tag-cloud'
            style={{
              fontFamily: 'sans-serif',
              //fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () => randomColor({
                hue: 'blue'
              }),
              padding: 5,
            }}>
            <div
              style={{
                fontFamily: 'serif',
                fontSize: 40,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: randomColor()
              }}>Futurama</div>
            <CloudItem text="Custom item, Hover me!" />
            <CloudItem text="Custom item 2, Hover me!" />
            <div className="tag-item-wrapper">
              <div>
                Hover Me Please!
              </div>
              <div className="tag-item-tooltip">
                HOVERED!
              </div>
            </div>
            <div>Gobots</div>
            <div>Thundercats</div>
            <div>M.A.S.K.</div>
            <div>GI Joe</div>
            <div>Inspector Gadget</div>
            <div>Bugs Bunny</div>
            <div>Tom & Jerry</div>
            <div>Cowboy Bebop</div>
            <div>Evangelion</div>
            <div>Bleach</div>
            <div>GITS</div>
            <div>Pokemon</div>
            <div>She Ra</div>
            <div>Fullmetal Alchemist</div>
            <div>Gundam</div>
            <div>Uni Taisen</div>
            <div>Pinky and the Brain</div>
            <div>Bobs Burgers</div>
            <div style={styles.small}>Dino Riders</div>
            <div style={styles.small}>Silverhawks</div>
            <div style={styles.small}>Bravestar</div>
            <div style={styles.small}>Starcom</div>
            <div style={styles.small}>Cops</div>
            <div style={styles.small}>Alfred J. Kwak</div>
            <div style={styles.small}>Dr Snuggles</div>
            {mappedProjectedVals}
          </TagCloud>
        </div>
      </div>
    );
  }
}


export default TagCloudView;
