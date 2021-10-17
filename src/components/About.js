import {
  CardMedia,
  makeStyles,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import fotoperfil from "../Images/foto perfil.jpg";

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
            Contenido de la tarjeta
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
    maxWidth: "90vw",
    margin: "0 auto",
  },
}));

export default About;
