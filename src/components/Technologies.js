import React from "react";
import iconhtml from "../Images/logohtml.png";
import iconcss from "../Images/logocss.png";
import iconcjs from "../Images/logojs.png";
import iconcreact from "../Images/logoract.png";
import iconebos from "../Images/logoebos.png";
import { Timeline } from "@material-ui/lab";

const Technologies = () => {
  const skills = [
    {
      skill: "Desarrollo Front-end",
      src: iconhtml,
      title: "HTML5, Flexbox",
    },
    {
      skill: "Desarrollo Front-end",
      src: iconcss,
      title: "CSS, CSS Grid, SASS, Bootstrap",
    },

    {
      skill: "Javascript",
      src: iconcjs,
    },
    {
      skill: "React",
      src: iconcreact,
    },
    {
      skill: "Back",
      src: iconebos,
      title: "conocimientos básicos de APIs, Node JS, Express y SQL",
    },
    {
      skill: "",
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

  return <Timeline>technologies</Timeline>;
};

export default Technologies;
