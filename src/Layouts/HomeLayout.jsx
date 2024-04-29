import { Grid } from "@mui/material";

import { Outlet, useLocation } from "react-router-dom";

import { HomeHeader } from "../components/HomeHeader";

function HomeLayout() {
  const location = useLocation();
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        overflowX: "hidden", // Hide horizontal scrollbar
        display: "flex",
         flexDirection: "row",
         backgroundColor: location.pathname === "/projects" ? "black !important" : "#162052"
      }}
    >
      <Grid item xs={12}>
        <HomeHeader />
      </Grid>
      <Grid item xs={12} sx={{ overflow: "auto",marginTop: location.pathname === "/projects" ? 0 : 14, paddingLeft: 4, paddingRight: 4}}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default HomeLayout;
