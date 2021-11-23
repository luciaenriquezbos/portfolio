import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import MyWork from "./MyWork";
import Contact from "./Contact";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#bac03c" },
    secondary: { main: "#333" },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
        <About id="about" dark={false} />
        <Skills title="{{skills}}" id="skills" dark={true} />
        <MyWork title="my work" id="work" dark={false} />
        <Contact title="{{contact me}}" id="contact" dark={true} />
      </div>
    </MuiThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
