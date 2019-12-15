import React from "react";
import {connect} from "react-redux";
import Aboutme from "../components/aboutme/Aboutme";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
import Menu from "../components/headers/Menu";
import LandingPage from "../components/landing/Landing";

class Home extends React.Component {
  render() {
    const {menu, page} = this.props;
    return (
      <div>
        {menu === false ? (
          <div>
            {page === 0 ? (
              <LandingPage />
            ) : ( page === 1 ? (
              <Aboutme />
            ) : (page === 2 ? (
              <Projects />
            ) : (page === 3 ? (
              <Contact />
            ) : "")) ) }
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
