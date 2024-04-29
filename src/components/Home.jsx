import { Grid, Typography } from "@mui/material";
import React from "react";
import userImage from "../assets/images/UserImage.png"; // Replace with the actual path to your image
import profileImage from "../assets/images/UserImage.png";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Grid
    display={"flex"}
    flexDirection={"column"}
    >
       <Grid item xs={12} sx={{ display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center", alignContent: "center" }}>
        <Grid className="box">
          <Grid className="content">
            <img src={profileImage}/>
            <Typography variant="h2">
             Gauree Kale <br/> <span>Full Stack Developer</span>
            </Typography>
            <br/>
            <a href="mailto:kalegauree44jobs@gmail.com?subject=Regarding%20Contact&body=Hello%20Gauree%20Kale%2C%0A%0A">Contact</a>
          </Grid>
        </Grid>
        </Grid>
      <Grid item xs={12} mt={6}>
          <Grid item className="watery-content-box"
          onClick={() => {
          navigate("/portfolio")
          }}>
            <Typography variant="h2" color="white" textAlign={"center"}>
            Explore CV
            </Typography>
            <Typography variant="h2" color="white" textAlign={"center"}>
            Explore CV
            </Typography>
          </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
