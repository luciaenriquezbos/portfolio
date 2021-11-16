import { Card, CardContent, CardMedia, Grid, Link, makeStyles } from "@material-ui/core";
import mockData from "./mockData.js";

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Grid container className={classes.grid}>
          {
          mockData.map( ({image, link}, index) => (
            <Grid Item key={ index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                 <CardMedia/> 
                <CardContent>
                  <Link href={link} color="primary" target="_blank" rel="noopener noreferrer"></Link>
                </CardContent>
                
                </Card>

            </Grid>
          ))
          }
       
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
    padding: " 10px",
    maxWidth: "90vw",
    margin: "0 auto",
  },
}));

export default MyWork;
