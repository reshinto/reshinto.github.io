import React from "react";
import {connect} from "react-redux";
import {closeMenu, setPage} from "../../redux/actions/menuAction";
import {Link} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

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
  redirectAbout = () => {
    this.props.setPage(0);
    this.props.closeMenu();
  };

  redirectPortfolio = () => {
    this.props.setPage(1);
    this.props.closeMenu();
  };

  redirectContact = () => {
    this.props.setPage(2);
    this.props.closeMenu();
  };

  render() {
    return (
      <div style={styles.body}>
        <Button style={styles.button} onClick={this.redirectAbout} fullWidth>
          about
        </Button>
        <Button
          style={styles.button}
          onClick={this.redirectPortfolio}
          fullWidth
        >
          Portfolio
        </Button>
        <Button style={styles.button} onClick={this.redirectContact} fullWidth>
          Contact
        </Button>
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
