import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";

export default {
  name: "Gauree Shrikrishna Kale",
  firstName: "Gauree",
  middleName: "Shrikrishna",
  surName: "Kale",
  title: "Full Stack Developer",

  birthday: "07th February 2001",
  email: "kalegauree44@gmail.com",
  address: "24, Shivaji Colony Akola Road, Akot",
  phone: "7741947640",
  nationality: "Indian",
  languages: "English, Marathi, Hindi",
  skills: [
    "C",
    "C++",
    "C# dotNet",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "MSsql",
  ],
  otherSkills: ["GitHub", "Git", "MUI", "VSCode", "Visual Studio"],
  extracurricular: ["Reading", "Exploring music with the Bamboo Flute!"],
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
      name: "Pratiti Technologies",
      duration: "January - April 2023",
      skills: ["C++", "C# dotNet", "React", "MS SQL"],
    },
    fullTime: {
      name: "Pratiti Technologies",
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
