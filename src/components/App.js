import { makeStyles } from "@material-ui/core";

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <h1>Este es mi portfolio</h1>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default App;
