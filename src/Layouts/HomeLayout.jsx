import { Grid } from "@mui/material";

import { Outlet } from "react-router-dom";

import { HomeHeader } from "../components/HomeHeader";

function HomeLayout() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "rgb(18, 18, 18)",
        overflowY: "auto", // Enable vertical scrolling
        height: "100vh", // Set the height of the container to 100% of the viewport height
        overflowX: "hidden", // Hide horizontal scrollbar
      }}
      spacing={1}
      padding={5}
    >
      <Grid item xs={12}>
        <HomeHeader />
      </Grid>
      <Grid item xs={12} sx={{ overflow: "auto", mt: 4 }}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default HomeLayout;
