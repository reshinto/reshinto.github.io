import React from "react";
import {connect} from "react-redux";
import Aboutme from "../components/aboutme/Aboutme";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
import Menu from "../components/headers/Menu";
import LandingPage from "../components/landing/Landing";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation";

class Home extends React.Component {
  render() {
    const {menu} = this.props;
    return (
      <div>
        {menu === false ? (
          <div style={{height: "auto"}}>
            <AwesomeSlider
              bullets={false}
              infinite={false}
              fillParent={true}
              cssModule={AwesomeSliderStyles}
              selected={this.props.page}
            >
              <div>
                <LandingPage />
              </div>
              <div
                style={{
                  overflow: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Aboutme />
              </div>
              <div
                style={{
                  overflow: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Projects />
              </div>
              <div>
                <Contact />
              </div>
            </AwesomeSlider>
          </div>
        ) : (
          <Menu />
        )}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    menu: state.menuReducer.menu,
    page: state.menuReducer.page,
  };
};

export default connect(mapStateToProps, null)(Home);
