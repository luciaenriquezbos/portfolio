import { AppBar, List, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import logo from "../Images/logo.jpg";
import { Link, animatorScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcons from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcons from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoToneIcons from "@material-ui/icons/ContactMailTwoTone";

const links = [
  {
    id: "about",
    text: "About me",
    icon: <InfoTwoToneIcon />,
  },
  {
    id: "skills",
    text: "Skills",
    icon: <EmojiObjectsTwoToneIcons />,
  },
  {
    id: "work",
    text: "My Work",
    icon: <BuildTwoToneIcons />,
  },
  {
    id: "contact",
    text: "Contact",
    icon: <ContactMailTwoToneIcons />,
  },
];

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} className={classes.logo} alt="Logo" />
        <List className={classes.menu}>
          {links.map(({ id, text }, index) => (
            <Link
              key={index}
              to={id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active">
              {text}
            </Link>
          ))}
        </List>
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
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "2rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  menu: {
    [theme.breakpoints.down("sm")]: { display: "none" },

    "& a": {
      color: "#333",
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
  },
}));

export default Navbar;
