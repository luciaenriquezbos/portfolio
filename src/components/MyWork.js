import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import mockData from "./mockData.js";

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Grid container classsName={classes.grid}>
          {mockData.map(({ title, description, image, link }, index) => (
            <Grid Item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cover}
                  image={image}
                  titulo="cover"
                />
                <CardContent>
                  <Link className={classes.link} href={link} target="_blank">
                    {title}
                  </Link>
                  <Typography className={classes.textsecondary}>
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
    padding: " 30px",
    maxWidth: "90vw",
    margin: "0 auto",
  },
  card: {
    maxWhith: 600,
    minHeight: 170,
    margin: theme.spacing(3),
  },
  cover: {
    height: 0,
    paddingTop: "56.25%",
  },
  textsecondary: {
    [theme.breakpoints.down("sm")]: { display: "none" },
    maxWidth: "600px",
    fontSize: "10px",
    color: "#bac03c",
  },
  link: {
    color: "#80807c",

    "& a:hover": {
      cursor: "pointer",
      color: "#80807c",
      textDecoration: "none",
    },
  },
}));

export default MyWork;
