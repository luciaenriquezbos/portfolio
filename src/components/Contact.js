import {
  makeStyles,
  Typography,
  Paper,
  Radio,
  TextField,
} from "@material-ui/core";
import { useState } from "react";

const Contact = ({ dark, id }) => {
  const classes = useStyles();
  const [value, setValue] = useState("Say Hi");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Paper className={classes.root}>
          <div className={classes.titleandhoices}>
            <Typography variant="h5">CONTACT ME</Typography>
            <div className={classes.choices}>
              <spam>Say Hello </spam>
              <Radio
                value="Say Hi"
                checked={value === "Say Hi"}
                color="primary"
                onChange={handleChange}
              />
              <spam>Send me a chuck's random joke </spam>
              <Radio
                value="Send me a Chuck's random joke "
                checked={value === "Send me a chuck's random joke "}
                color="primary"
                onChange={handleChange}
              />
            </div>
          </div>
          <form className={classes.form}>
            <TextField label="Your name"></TextField>
            <TextField label="Your e-mail"></TextField>
            <TextField label="Write a message"></TextField>
          </form>
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
  },
}));

export default Contact;
