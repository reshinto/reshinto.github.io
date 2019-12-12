import React from "react";
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  color: "#CFCFCF",
  fontSize: "4rem",
  position: "fixed",
  zIndex: 2,
  margin: "2rem"
}

function Header() {
  return (
    <MenuIcon style={styles} />
  );
}

export default Header;

    // <h1 style={{textAlign: "center", position: "fixed", zIndex: 2, margin: "2rem"}}>
    //   {/*
    //   <Link to="/new">Add project</Link>
    //   */}
    // </h1>
