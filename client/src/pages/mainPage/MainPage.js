import React, { Component } from "react";
import HomePage from "./HomePage";
import ParticleComponent from "./ParticleComponent"

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 0,
            width: "100%",
            height: "100%"
          }}
      >
        <div
          style={{
            position: "sticky",
            top: 100,
            left: 0,
            width: "100%",
            height: "100%"
          }}
      >
        <ParticleComponent/>
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          >
            <HomePage />
              </div>
            </div>
      </div>
    );
  }
}

export default MainPage;
