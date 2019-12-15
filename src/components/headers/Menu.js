import React from "react";
import {connect} from "react-redux";
import {closeMenu, setPage} from "../../redux/actions/menuAction";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
// import {Link} from "react-router-dom";
// import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  button: {
    color: "#CFCFCF",
    fontSize: "4rem",
    padding: "3rem 0",
  },
};

class Menu extends React.Component {
  redirectHome = () => {
    this.props.setPage(0);
    this.props.closeMenu();
  };

  redirectAbout = () => {
    this.props.setPage(1);
    this.props.closeMenu();
  };

  redirectPortfolio = () => {
    this.props.setPage(2);
    this.props.closeMenu();
  };

  redirectContact = () => {
    this.props.setPage(3);
    this.props.closeMenu();
  };

  render() {
    return (
      <div style={styles.body}>
        <Tooltip title="Go to home page" aria-label="home">
          <Button style={styles.button} onClick={this.redirectHome} fullWidth>
            Home
          </Button>
        </Tooltip>
        <Tooltip title="Go to about page" aria-label="about">
          <Button style={styles.button} onClick={this.redirectAbout} fullWidth>
            about
          </Button>
        </Tooltip>
        <Tooltip title="Go to portfolio page" aria-label="portfolio">
          <Button
            style={styles.button}
            onClick={this.redirectPortfolio}
            fullWidth
          >
            Portfolio
          </Button>
        </Tooltip>
        <Tooltip title="Go to contact page" aria-label="contact">
          <Button
            style={styles.button}
            onClick={this.redirectContact}
            fullWidth
          >
            Contact
          </Button>
        </Tooltip>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menuReducer.menu,
  };
};

const mapDispatchToProps = {
  closeMenu: () => closeMenu(),
  setPage: page => setPage(page),
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
