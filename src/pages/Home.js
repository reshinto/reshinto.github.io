import React from "react";
import Aboutme from "../components/aboutme/Aboutme";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';

class Home extends React.Component {
  render() {
    return (
      <div style={{height: "auto"}}>
        {slider}
      </div>
    );
  }
}
const slider = (
  <AwesomeSlider organicArrows={true} fillParent={true} cssModule={AwesomeSliderStyles}>
    <div>
      <Aboutme />
    </div>
    <div name="Projects" style={{overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
      <Projects />
    </div>
    <div>
      <Contact />
    </div>
  </AwesomeSlider>
);

export default Home;
