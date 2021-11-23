import {
  makeStyles,
  Typography,
  Paper,
  Radio,
  TextField,
  Button,
} from "@material-ui/core";
import { useState } from "react";

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  const [value, setValue] = useState("Say Hi");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Paper className={classes.root}>
          <div className={classes.choices}>
            <spam>Say Hello </spam>
            <Radio
              value="Say Hi"
              checked={value === "Say Hi"}
              color="#bac03c"
              onChange={handleChange}
            />
            <spam>Chuck's random joke </spam>
            <Radio
              value="Joke"
              checked={value === "Joke"}
              color="#bac03c"
              onChange={handleChange}
            />
          </div>
          <form className={classes.form}>
            <TextField label="Your name" />
            <TextField label="Your e-mail" />
            <TextField label="Write a message" />
            {value === "Joke" ? <TextField label="Chuck Norris Joke" /> : null}
          </form>
          <Button variant="contained">Submit</Button>
        </Paper>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "90vw",
    margin: "0 auto",
    paddingTop: "20px",
  },

  root: {
    maxWidth: "500px",
    color: "#bac03c",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
    margin: "20px",
    padding: "20px",
    "& button": {
      backgroundColor: "#bac03c",
      fontWeith: 900,
      fontSize: "1.1rem",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },
}));

export default Contact;
