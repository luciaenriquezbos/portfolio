import ApiKey from "./ApiKey";
import emailjs from "emailjs-com";
import {
  makeStyles,
  Typography,
  Paper,
  Radio,
  TextField,
  Button,
} from "@material-ui/core";
import { useState } from "react";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm("service_ansal3o", ApiKey.TEMPLATE_ID, e.target, ApiKey.USER_ID)
    .then(
      (result) => {
        alert("Correo enviado correctamente");
      },
      (error) => {
        alert("Ocurrio un error, intente nuevamente");
      }
    );
};

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
            <spam>Chuck's joke </spam>
            <Radio
              value="Joke"
              checked={value === "Joke"}
              color="#bac03c"
              onChange={handleChange}
            />
          </div>
          <form className={classes.form} onSubmit={sendEmail}>
            <TextField type="text" name="name" label="Your name" />
            <TextField type="email" name="email" label="Your e-mail" />
            <TextField name="message" label="Your message" />

            {value === "Joke" ? <TextField label="Chuck Norris Joke" /> : null}

            <Button
              className={classes.button}
              type="submit"
              value="Send"
              variant="contained">
              Submit
            </Button>
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
    paddingTop: "20px",
  },

  root: {
    maxWidth: "500px",
    color: "#bac03c",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
    padding: "30px",
  },
  button: {
    marginTop: "30px",
  },
}));

export default Contact;
