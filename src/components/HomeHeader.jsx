import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { DarkMode } from "@mui/icons-material";
import resumeData from "../utils/resumeData";

const NavLink = ({ to, text }) => (
  <Grid item>
    <Link to={to} style={{ textDecoration: "none" }}>
      <Typography variant="body1" sx={{ color: "white", cursor: "pointer" }}>
        {text}
      </Typography>
    </Link>
  </Grid>
);

export const HomeHeader = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{
        position: "fixed",
        top: 0,
        width: "94%",
        zIndex: 1000, // Set a higher z-index to ensure it appears above other elements
        backgroundColor: "rgb(18, 18, 18)",
        paddingTop: 4, // Adjust padding as needed
        //paddingRight: 8,
        paddingBottom: 2,
      }}
    >
      <Grid item>
        <Typography variant="h6" sx={{ color: "white", fontSize: 19 }}>
          {resumeData.name}
        </Typography>
        <Typography sx={{ color: "white", fontSize: 12 }}>
          {resumeData.title}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2} alignItems="center">
          <NavLink to="/" text="Home" />
          <NavLink to="/portfolio" text="Portfolio" />
          <NavLink to="/projects" text="Projects" />
          <NavLink to="/contact" text="Contact" />
          <Grid item>
            <DarkMode sx={{ color: "white", cursor: "pointer" }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
