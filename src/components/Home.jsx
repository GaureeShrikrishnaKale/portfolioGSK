import { Grid, Typography } from "@mui/material";
import React from "react";
import userImage from "../assets/images/UserImage.png"; // Replace with the actual path to your image

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
      // padding={3}
      paddingTop={5}
      sx={{ height: "100%", overflow: "auto" }}
    >
      {/* Left Column */}
      <Grid item xs={12} md={4}>
        <img
          src={userImage}
          alt="User"
          style={{ width: "100%", borderRadius: "1%" }}
        />
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} md={8}>
        <Grid
          container
          direction="column"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Grid item>
            <Typography variant="h5" color="white">
              Welcome to My Website
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="white">
              An Imagineer pursued B-Tech in CSE, I have enclosed my
              qualifications in brief, moreover I am a quick learner and possess
              good interpersonal skills, thank you for your valuable
              consideration.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
