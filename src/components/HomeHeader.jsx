import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { DarkMode } from "@mui/icons-material";
import resumeData from "../utils/resumeData";

const NavLink = ({ to, text }) => {
  const location = useLocation();
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  useEffect(() => {
    const activeMenu = location.pathname;
    setIsActiveMenu(activeMenu === to ? true : false);
  },[window.location.pathname]);

return (
  <Grid item>
    <Link to={to} style={{ textDecoration: "none",  }}>
      <Typography variant="body1" sx={{ color: "white", cursor: "pointer", borderBottom: isActiveMenu ? "2px solid white" : "none", paddingBottom: "5px", fontWeight: isActiveMenu ? "bold" : "none", 
      backgroundImage: "var(--gradient)" , backgroundClip: "text", color: isActiveMenu ? "transparent" : "white", backgroundSize: "200%", animation: "bg-animation 1s infinite alternate" }}
      >
        {text}
      </Typography>
    </Link>
  </Grid>
)};

export const HomeHeader = () => {
  const location = useLocation();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000, // Set a higher z-index to ensure it appears above other elements
        backgroundColor: location.pathname === "/projects" ? "black !important": "#162052",
        padding: "30px 40px 20px 40px",
      }}
    >
      <Grid item>
        <Typography variant="h6" sx={{ color: "white", fontSize: 19 }}>
          {resumeData.name}
        </Typography>
        <Typography className="animation-effect" >{resumeData.title}
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
