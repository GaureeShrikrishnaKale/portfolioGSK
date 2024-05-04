import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import smokebg from "../assets/Videos/smoke.mp4";
import {data} from "../utils/projectImages.js";
// import mplay from "../assets/images/M-Play.png";
// import allFlute from "../assets/images/All-about-flute.jpg";
// import bankToken from "../assets/images/Bank-Token-Generation-System.jpg";
// import placeShalla from "../assets/images/placement-shalla.jpg";
// import tic from "../assets/images/Tic-tac-toe.avif";
import { ArrowLeft, ArrowRight} from "@mui/icons-material";

const Projects = () => {
  const [indexImage, setindexImage] = useState(0);

  const handlePrevClick = () => {
    setindexImage(!indexImage ? data.length - 1 : indexImage - 1);
  }

  const handleNextClick = () => {
    setindexImage((indexImage + 1) % data.length);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextClick();
    },5000);
    return () => {
      clearTimeout(timer);
    }
  },[indexImage])
  return (
  <>
    <Grid className="center-column">
      <Grid sx={{display: {
      xs: 'none',
      sm: 'none',
      md: 'none',
      lg: 'flex',
      xl: 'none',
    }}}>
        <video src={smokebg} autoPlay muted></video>
        <Typography className="project-title">
          {/* My Projects */}
          <span>M</span>
          <span>Y</span>
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </Typography>
      </Grid>

      {/* <Grid sx={{display: {
      xs: 'flex',
      sm: 'flex',
      md: 'flex',
      lg: 'none',
      xl: 'flex',
    }, flexDirection: 'column',  textAlign: "center"}}>
        <Typography sx={{color: "white", textAlign: "center", fontSize: "30px", fontWeight: "bold"}}>My Projects</Typography>
      </Grid> */}

      <Grid className="slider">
        <Grid className="slide-track">

          {data.map((project, i) => (
            <Grid className="slide" display={indexImage === i ? "flex" : "none"}>
                <Typography sx={{color: "white", fontSize: "20px"}}>{project.name}</Typography>
                <Typography sx={{color: "white"}}>{project.description}</Typography>
            <img src={project.image} alt="images"/>
          </Grid>
          ))}

          <Grid className="slide-controls">
            <Button id="prev-btn" onClick={() => handlePrevClick()}>
              <ArrowLeft sx={{fontSize: "30px"}}/>
            </Button>

            <Button id="next-btn" onClick={() => handleNextClick()}>
              <ArrowRight sx={{fontSize: "30px"}}/>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
  )
};

export default Projects;
