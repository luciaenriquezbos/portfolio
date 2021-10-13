import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import logo from "../Images/logo.png";
import { makeStyles } from "@material-ui/core";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} className={classes.logo} alt="Logo" />
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    top: 0,
    left: 0,
    right: 0,
    aIndex: 999,
  },
  toolbar:{
    display:"flex",
    justifyContent:


  }
  logo: {
    height: "2rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default Navbar;
