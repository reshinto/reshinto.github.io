import React from "react";
import {connect} from "react-redux";
import {openMenu, closeMenu} from "../../redux/actions/menuAction";
import {Link} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const styles = {
  open: {
    color: "#CFCFCF",
    fontSize: "4rem",
    position: "fixed",
    zIndex: 2,
    margin: "2rem",
  },
  close: {
    right: 0,
    color: "#CFCFCF",
    fontSize: "4rem",
    position: "fixed",
    zIndex: 2,
    margin: "2rem",
  },
};

function Header(props) {
  const {menu} = props;
  return (
    <>
      {menu === false ? (
        <Button onClick={props.openMenu}>
          <MenuIcon style={styles.open} />
        </Button>
      ) : (
        <Button onClick={props.closeMenu}>
          <CloseIcon style={styles.close} />
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
