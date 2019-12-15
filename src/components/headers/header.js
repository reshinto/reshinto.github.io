import React from "react";
import {connect} from "react-redux";
import {openMenu, closeMenu} from "../../redux/actions/menuAction";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
// import {Link} from "react-router-dom";

const styles = {
  open: {
    right: 0,
    color: "#CFCFCF",
    fontSize: "6rem",
    position: "fixed",
    zIndex: 2,
    margin: "5rem",
  },
  close: {
    right: 0,
    color: "#CFCFCF",
    fontSize: "6rem",
    position: "fixed",
    zIndex: 2,
    margin: "5rem",
  },
};

function Header(props) {
  const {menu} = props;
  return (
    <>
      {menu === false ? (
        <Button onClick={props.openMenu}>
          <Tooltip title="Open Menu" aria-label="menu">
            <MenuIcon style={styles.open} />
          </Tooltip>
        </Button>
      ) : (
        <Button onClick={props.closeMenu}>
          <Tooltip title="Close Menu" aria-label="close">
          <CloseIcon style={styles.close} />
          </Tooltip>
        </Button>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    menu: state.menuReducer.menu,
  };
};

const mapDispatchToProps = {
  openMenu: () => openMenu(),
  closeMenu: () => closeMenu(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// <h1 style={{textAlign: "center", position: "fixed", zIndex: 2, margin: "2rem"}}>
//   {/*
//   <Link to="/new">Add project</Link>
//   */}
// </h1>
