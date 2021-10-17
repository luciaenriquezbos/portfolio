import {
  CardMedia,
  makeStyles,
  Card,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
import fotoperfil from "../Images/foto perfil.jpg";
import TypeWriterEffect from "react-typewriter-effect";
import pdf from "../Images/CV Lucia Enríquez Bos.pdf";

const About = ({ dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Card className={classes.card}>
          <CardMedia
            image={fotoperfil}
            className={classes.media}
            title="picture"
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
              cursorColor="#bac03c"
              typeSpeed={100}
            />
            <TypeWriterEffect
              text="HTML, CSS3, JAVASCRIPT, REACT, 
              GRAPHIC DESIGN"
              textStyle={{
                lineHeight: "80px",
                fontSize: "10px",
                color: "#80807c",
              }}
              startDelay={2000}
              cursorColor="grey"
              typeSpeed={50}
            />
          </CardContent>
          <CardActions>
            <Button className={classes.pdfbutton} variant="contained">
              <a href={pdf} download>
                Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "50vh",
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
    [theme.breakpoints.down("sm")]: { display: "block" },
    height: "100vh",
    display: "flex",
    boxShadow: "none",
    //position: "absolute",
  },
  media: {
    [theme.breakpoints.down("sm")]: { width: "150px", height: "150px" },
    marginTop: theme.spacing(4),
    marginLeft: "20px",
    width: "200px",
    height: "200px",
    obectfit: "cover",
  },
  cardcontent: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      fontSize: "25px",
      marginTop: theme.spacing(1),
    },
    marginTop: theme.spacing(4),
    fontSize: "40px",
    fontWeight: "bold",
    color: "#80807c",
  },
}));

export default About;
