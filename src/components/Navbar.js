import {
  AppBar,
  List,
  makeStyles,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import React from "react";
import logo from "../Images/logo.jpg";
import { Link, animatorScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import EmojiObjectsTwoToneIcons from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcons from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoToneIcons from "@material-ui/icons/ContactMailTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import { useState } from "react";

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const links = [
    {
      id: "about",
      text: "{about me}",
      icon: <InfoTwoToneIcon className={classes.ligth2} />,
    },
    {
      id: "skills",
      text: "{skills}",
      icon: <EmojiObjectsTwoToneIcons className={classes.ligth} />,
    },
    {
      id: "work",
      text: "{my work}",
      icon: <BuildTwoToneIcons className={classes.ligth2} />,
    },
    {
      id: "contact",
      text: "{contact}",
      icon: <ContactMailTwoToneIcons className={classes.ligth2} />,
    },
  ];
  return (
    <>
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
          <IconButton
            edge="end"
            className={classes.menubutton}
            onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)}>
          <CancelIcon className={classes.cancelicon} />
        </IconButton>
        <Divider />
        {links.map(({ id, text, icon }, index) => (
          <Link
            className={classes.sidebar}
            key={index}
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active">
            <ListItem>
              <span>
                <ListItemIcon>{icon}</ListItemIcon>
              </span>
              {text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
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
    [theme.breakpoints.down("sm")]: { height: "1.2rem" },
    height: "2rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  menu: {
    [theme.breakpoints.down("sm")]: { display: "none" },

    "& a": {
      color: "#80807c",
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      cursor: "pointer",
      color: "#bac03c",
      borderBottom: "3px solid #bac03c",
    },
  },
  ligth: {
    color: "#ffcc00",
  },
  ligth2: {
    color: "#bac03c",
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: { display: "block" },
    backgroundColor: "white",
    color: "#bac03c",
    position: "absolute",
    top: 0,
    right: 10,
  },
  cancelicon: {
    color: "#bac03c",
    position: "absolute",
    top: 0,
    right: 10,
  },

  sidebar: {
    margin: theme.spacing(0, 0, 0, 2),
    width: "40vw",
    color: "#bac03c",
    fontWeight: "bold",

    "& :hover": {
      color: "#80807c",
      cursor: "pointer",
    },
  },
}));

export default Navbar;
