import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Grid
} from "@mui/material";
import {data} from "../utils/projectImages.js";
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
    <Grid className="center-column">
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
  )
};

export default Projects;
