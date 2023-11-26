import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import resumeData from "../utils/resumeData";

const Portfolio = () => {
  const handleDownloadCV = () => {
    // Handle the logic to download the CV
    // You can create a PDF or provide a link to your CV file
    alert("Download CV functionality to be implemented.");
  };

  return (
    <Grid container spacing={3} overflow="auto">
      {/* Personal Info */}
      <Grid item xs={12} mt={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" sx={{ alignContent: "center" }}>
              Personal Information
            </Typography>
            <Typography>First Name: {resumeData.firstName}</Typography>
            <Typography>Last Name: {resumeData.surName}</Typography>
            <Typography>Birthdate: {resumeData.birthday}</Typography>
            <Typography>Nationality: {resumeData.nationality}</Typography>
            <Typography>Languages: {resumeData.languages}</Typography>
            <Typography>Phone No: {resumeData.phone}</Typography>
            <Typography>Email: {resumeData.email}</Typography>
            <Button variant="contained" onClick={handleDownloadCV}>
              Download CV
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Skills */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Skills</Typography>
            {/* Cards for each skill */}
            <Grid container spacing={2}>
              {/* Map over skills and create a card for each skill */}
              {resumeData.skills.map((skill) => (
                <Grid item xs={6} md={4} key={skill}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{skill}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/*Other Skills*/}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Other Skills</Typography>
            {/* Cards for each skill */}
            <Grid container spacing={2}>
              {/* Map over skills and create a card for each skill */}
              {resumeData.otherSkills.map((skill) => (
                <Grid item xs={6} md={4} key={skill}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{skill}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/*Extracurricular*/}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Extracurricular</Typography>
            {/* Cards for each skill */}
            <Grid container spacing={2}>
              {/* Map over skills and create a card for each skill */}
              {resumeData.extracurricular.map((skill) => (
                <Grid item xs={6} md={4} key={skill}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{skill}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Educational Journey */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Educational Journey</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography>SSC</Typography>
                    <Typography>{resumeData.educational.SSC.name}</Typography>
                    <Typography>{resumeData.educational.SSC.score}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography>HSC</Typography>
                    <Typography>{resumeData.educational.HSC.name}</Typography>
                    <Typography>{resumeData.educational.HSC.score}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography>Graduation</Typography>
                    <Typography>
                      {resumeData.educational.graduation.name}
                    </Typography>
                    <Typography>
                      {resumeData.educational.graduation.score}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Experience */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Experience</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography>
                      {resumeData.experiance.internship.duration}
                    </Typography>
                    <Typography>
                      {resumeData.experiance.internship.name}
                    </Typography>
                    <Grid container spacing={2}>
                      {resumeData.experiance.internship.skills.map((skill) => (
                        <Grid item xs={6} md={3} key={skill}>
                          <Paper>{skill}</Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography>
                      {resumeData.experiance.fullTime.duration}
                    </Typography>
                    <Typography>
                      {resumeData.experiance.fullTime.name}
                    </Typography>
                    <Grid container spacing={2}>
                      {resumeData.experiance.fullTime.skills.map((skill) => (
                        <Grid item xs={6} md={3} key={skill}>
                          <Paper>{skill}</Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
