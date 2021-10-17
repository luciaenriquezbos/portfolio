import { makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import MyWork from "./MyWork";
import Contact from "./Contact";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <About title="About Me" id="about" dark={false} />
      <Skills title="My Coding Jaurney" id="skills" dark={false} />
      <MyWork title="My Work" id="work" dark={true} />
      <Contact title="Contact" id="contact" dark={false} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
