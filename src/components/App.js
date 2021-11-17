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
      <About id="about" dark={false} />
      <Skills title="{{skills}}" id="skills" dark={true} />
      <MyWork title="my work" id="work" dark={false} />
      <Contact title="contact" id="contact" dark={false} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
