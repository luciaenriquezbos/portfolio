import {
  CardMedia,
  makeStyles,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import fotoperfil from "../Images/foto perfil.jpg";
import TypeWriterEffect from "react-typewriter-effect";

const About = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia
            image={fotoperfil}
            className={classes.media}
            tile="picture"
          />
          <CardContent className={classes.cardcontent}>
            Lucía Enríquez Bos
            <TypeWriterEffect
              text="Front-end Developer Jr."
              textStyle={{
                fontSize: "2rem",
                fontWeight: "700px",
                color: "#bac03c",
              }}
              startDelay={100}
              cursorColor="grey"
              typeSpeed={100}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#80807c",
    color: "#fff",
  },
  sectioncontent: {
    maxWidth: "95vw",
    margin: "0 auto",
  },
  card: {
    height: "70vh",
    display: "flex",
    marginTop: theme.spacing(10),
    boxShadow: "none",
    position: "relative",
  },
  // media: {
  //   width: "200px",
  //   height: "auto",
  //   obectfit: "cover",
  // },
  cardcontent: {
    [theme.breakpoints.down("sm")]: { maxWidth: "300px", fontSize: "25px" },
    fontSize: "40px",
    fontWeight: "bold",
    color: "#80807c",
  },
}));

export default About;
