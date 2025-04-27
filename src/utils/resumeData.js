import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import CPPIcon from "../assets/images/cpp-icon (2).png";
import CSharpIcon from "../assets/images/csharp-icon.svg";
import SQL from "../assets/images/sql.svg";
import HTMLIcon from "../assets/images/html-icon.png";
import CSSIcon from "../assets/images/css-icon.webp";
import JSIcon from "../assets/images/js-icon.svg";
import NodeJsIcon from "../assets/images/nodejs-icon.png";
import ReactIcon from "../assets/images/react-icon.webp";
import ExpressIcon from "../assets/images/express-icon1.png";
import JavaIcon from "../assets/images/java-icon1.webp";
import MsSQLIcon from "../assets/images/mssql-icon.png";
import GithubIcon from "../assets/images/github-mark-white.svg";
import GitIcon from "../assets/images/git-icon3.webp";
import MUIIcon from "../assets/images/mui-icon.png";
import VSCodeIcon from "../assets/images/vscode-icon.webp";
import ReadingIcon from "../assets/images/reading-icon.webp";
import FluteIcon from "../assets/images/flute-icon.png";

export default {
  name: "Gauree Shrikrishna Kale",
  firstName: "Gauree",
  middleName: "Shrikrishna",
  surName: "Kale",
  title: "Full Stack Developer",

  birthday: "07th February 2001",
  email: "kalegauree44@gmail.com",
  address: "24, Shivaji Colony Akola Road, Akot",
  phone: "XXXXXXXX40",
  nationality: "Indian",
  languages: "English, Marathi, Hindi",
  skills: [
   {name: "C", icon: "<span style='font-size: 70px; font-weight: 800; color: rgb(101, 154, 210); font-family: Roboto, Helvetica, Arial, sans-serif;'>C</span>"},
    {name: "C++", icon: CPPIcon, color: "#2281E3"},
    {name: "SQL", icon: SQL, color: "#FFDA44"},
    {name: "HTML", icon: HTMLIcon, color: "#E44D26"},
    {name: "CSS", icon: CSSIcon, color: "#1573B5" },
    {name: "JavaScript", icon: JSIcon, color: "#FBC02D"},
    {name: "NodeJS", icon: NodeJsIcon, color: "#83CD29"},
    {name: "React", icon: ReactIcon, color: "#00D8FF"},
    {name: "Express", icon: ExpressIcon, color: "#000000"},
    {name: "C#", icon: CSharpIcon, color: "#9934F7"},
    {name: "Java", icon: JavaIcon, color: "#E76F00"},
    {name: "MS-SQL", icon: MsSQLIcon, color: "#FF3A14"},
  ],
  otherSkills: [
    {name: "VSCode", icon: VSCodeIcon, color: "#017ACC"},
    {name: "Github", icon: GithubIcon, color: "#FFFFFF"},
    {name: "Git", icon: GitIcon, color: "#DF4C37"},
    {name: "MUI", icon: MUIIcon, color: "#0080FF"}, 
  ],
  extracurricular: [
    {name: "Reading", icon: ReadingIcon}, 
    {name: "Exploring music", icon: FluteIcon}
  ],
  educational: {
    SSC: {
      name: "Shri Bhausaheb Potey Vidyalay Akot.",
      year: "June 2016 - March 2017",
      score: "98.20 %",
    },
    HSC: {
      name: "Shri Shivaji Jr College, Akot.",
      year: "July 2017 - February 2019",
      score: "88.15 %",
    },
    graduation: {
      name: "Government College of Engineering, Amravati",
      year: "August 2019 - May 2023",
      score: "8.75 CGPA",
    },
  },

  experiance: {
    internship: {
      name: "Pratiti Technologies Pvt. Ltd, Pune.",
      duration: "January - April 2023",
      skills: ["C++", "C# .Net", "ReactJS", "MS SQL"],
    },
    fullTime: {
      name: "Pratiti Technologies Pvt. Ltd, Pune.",
      duration: "August 2023 - Present",
      skills: ["C# dotNet", "React", "PostgreSql"],
    },
  },

  socials: {
    linkedIn: {
      link: "https://www.linkedin.com/in/gauree-kale/",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },

    instagram: {
      link: "https://www.instagram.com/gaureekale72/",
      text: "MyInstagram",
      icon: <InstagramIcon />,
    },

    gitHub: {
      link: "https://github.com/GaureeShrikrishnaKale",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },

    codeChef: {
      link: "https://www.codechef.com/users/kalegauree72",
      text: "MyCodechef",
      icon: <CodeIcon />,
    },
  },
};
