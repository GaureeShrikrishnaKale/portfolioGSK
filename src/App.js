import "./App.css";
import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Resume } from "./pages/Resume/Resume";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "blue" }}
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          <Router>
            <Routes>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Routes>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
