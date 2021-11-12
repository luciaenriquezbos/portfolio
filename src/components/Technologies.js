import React from "react";
import iconhtml from "../Images/logohtml.png";
import iconcss from "../Images/logocss.png";
import iconcjs from "../Images/logojs.png";
import iconcreact from "../Images/logoract.png";
import iconebos from "../Images/logoebos.png";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import { makeStyles, Typography } from "@material-ui/core";

const Technologies = () => {
  const classes = useStyles();
  const skills = [
    {
      skill: "Desarrollo Front-end",
      src: iconhtml,
      title: "HTML5, Flexbox",
    },
    {
      skill: " ",
      src: iconcss,
      title: "CSS, CSS Grid, SASS, Bootstrap",
    },

    {
      skill: "Javascript",
      src: iconcjs,
      title: " ",
    },
    {
      skill: "React",
      src: iconcreact,
      title: " ",
    },
    {
      skill: "Back",
      src: iconebos,
      title: "conocimientos básicos de APIs, Node JS, Express y SQL",
    },
    {
      skill: " ",
      src: iconebos,
      title: "Slack, GitHub, VS Code, Gulp, Terminal,  Zeplin",
    },
    {
      skill: "Desarrollo de proyectos",
      src: iconebos,
      title:
        "filosofía de proyecto Agile y marco de trabajo Scrum. Dominio herramientas trabajo en remoto",
    },
    {
      skill: "Diseño Gráfico",
      src: iconebos,
      title: "creative suite, wordpress",
    },
  ];

  return (
    <Timeline align="left">
      {skills.map(({ skill, src, title }, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography color="white">{skill}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <img src={src} alt={title} className={classes.customlogo} />
          </TimelineSeparator>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

const useStyles = makeStyles((theme) => ({
  customlogo: { width: "25px" },
}));

export default Technologies;
