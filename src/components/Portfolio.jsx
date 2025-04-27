import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import resumeData from "../utils/resumeData";
import resume from "../assets/Resume/Gauree_Kale_Resume.pdf";
import profileImage from "../assets/images/UserImage.png";
import { Download } from "@mui/icons-material";
import SchoolIcon from '@mui/icons-material/School';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const Portfolio = () => {
  const handleDownloadCV = () => {
    const cvUrl = resume;
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Gauree_Kale_Resume.pdf'; // Set the filename for download
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  return (
    <Grid container item xs={12} spacing={4} overflow="auto">
      {/* Personal Info */}
        <Grid item xs={12} lg={4} display={"flex"} justifyContent={"center"} marginBottom={5} marginTop={5}>
        <Grid className="box">
          <Grid className="content">
            <img src={profileImage}/>
            <Typography variant="h2">
             Gauree Kale <br/> <span>Full Stack Developer</span>
            </Typography>
            <br/>
            <a href="#">Contact</a>
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs={12} lg={8} marginBottom={5} marginTop={5} sx={{color: "white", alignSelf: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography variant="h5" sx={{ fontSize: "30px", fontWeight: "bold", mb: 2 }}>
            Personal Information
          </Typography>
          <Grid sx={{display: "flex", flexDirection: 'row', ml: 2}}>
            <Grid item xs={6} className="portfolio-details-text" >
              <Typography variant="h5">First Name: <span>{resumeData.firstName}</span> </Typography>
              <Typography variant="h5">Birthdate: <span>{resumeData.birthday}</span></Typography>
              <Typography variant="h5">Languages: <span>{resumeData.languages}</span></Typography>
              <Typography variant="h5">Email: <span>{resumeData.email}</span></Typography>
            </Grid>

            <Grid item xs={6} className="portfolio-details-text">
              <Typography variant="h5">Last Name: <span>{resumeData.surName}</span></Typography>
              <Typography variant="h5">Nationality: <span>{resumeData.nationality}</span></Typography>
              <Typography variant="h5">Phone No: <span>{resumeData.phone}</span></Typography>
              <Typography variant="h5">Freelance: <span>Available</span></Typography>
            </Grid> 
          </Grid>
          
          <Grid className="cv-button"> 
            <Button variant="contained" onClick={handleDownloadCV}>
              <Download sx={{mr: 1, borderRadius: "15px", border: "solid white 2px"}}/>
              Download CV
            </Button>
          </Grid>
          
        </Grid>

      <Grid className="horizontal-line">
      </Grid>

      {/* Skills */}
      <Grid item xs={12} marginBottom={5}>
        <Typography variant="h5" sx={{ fontSize: "30px", fontWeight: "bold", mb: 2, color: "white" }}>Skills</Typography>
        {/* Cards for each skill */}
        <Grid container xs={12} spacing={2}>
          {/* Map over skills and create a card for each skill */}
          {resumeData.skills.map((skill) => (
            <Grid item xs={6} sm={4} md={3} key={skill.name}>
              <Card className="skill-card">
                <CardContent>
                  {skill.name === "C" ? 
                  <Typography><span dangerouslySetInnerHTML={{ __html: skill.icon }} /></Typography> 
                  :
                  (<img src={skill.icon} height={"80px"} width={"80px"} style={{marginTop: "10px", marginBottom: "10px"}} />)}
                  <Typography variant="h6" sx={{color: skill.color, fontWeight: "bold"}}>{skill.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>  
      </Grid>

      <Grid className="horizontal-line">
      </Grid>

      {/*Other Skills*/}
      <Grid item xs={12} marginBottom={4}>
        <Typography variant="h5" sx={{ fontSize: "30px", fontWeight: "bold", mb: 2, color: "white" }}>Other Skills</Typography>
        {/* Cards for each skill */}
        <Grid container xs={12} spacing={2}>
          {/* Map over skills and create a card for each skill */}
          {resumeData.otherSkills.map((skill) => (
            <Grid item xs={6} sm={4} md={3} key={skill.name} className="other-skill-card">
                  <img src={skill.icon} style={{marginTop: "10px", marginBottom: "10px"}} />
                  <Typography variant="h6" sx={{color: skill.color}}>{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid className="horizontal-line">
      </Grid>

      <Grid container xs={12} className="row" marginTop={4}>
        {/* Educational Journey */}
      <Grid item xs={12} md={6} sx={{ paddingLeft: { xs: 2, sm: 10, md: 15, lg: 20, xl: 30 } }}>
        <Typography variant="h5" sx={{ fontSize: "30px", fontWeight: "bold", mb: 2, color: "white" }}>Education</Typography>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={12}>
            <Grid className="row">
              <Grid>
                <ImportContactsIcon className="icon-education"/>
                <Grid className="vertical-line">
                </Grid>
              </Grid>
              <Grid className="edu-details-text">
                <Typography className="year-text">Jun/2016 - March/2017</Typography>
                <Typography variant="h6">SSC</Typography>
                <Typography variant="h6">{resumeData.educational.SSC.name}</Typography>
                <Typography variant="h6">{resumeData.educational.SSC.score}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} >
            <Grid className="row">
              <Grid>
                <ImportContactsIcon className="icon-education"/>
                <Grid className="vertical-line">
                </Grid>
              </Grid>
              <Grid className="edu-details-text">
                <Typography className="year-text">Jul/2017 - Feb/2019</Typography>
                <Typography variant="h6">HSC</Typography>
                <Typography variant="h6">{resumeData.educational.HSC.name}</Typography>
                <Typography variant="h6">{resumeData.educational.HSC.score}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
          <Grid className="row">
              <Grid>
                <SchoolIcon className="icon-education"/>
                <Grid className="vertical-line">
                </Grid>
              </Grid>
              <Grid className="edu-details-text">
                <Typography className="year-text">Aug/2019 - May/2023</Typography>
                <Typography variant="h6">Graduation</Typography>
                <Typography variant="h6">
                  {resumeData.educational.graduation.name}
                </Typography>
                <Typography variant="h6">
                  {resumeData.educational.graduation.score}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Experience */}
      <Grid item xs={12} md={6} sx={{ paddingLeft: { xs: 2, sm: 10 }, paddingTop: {xs: 5, sm: 5, md: 0} }}>
        <Typography variant="h5" sx={{ fontSize: "30px", fontWeight: "bold", mb: 2, color: "white" }}>Experience</Typography>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={12}>
          <Grid className="row">
              <Grid>
                <SchoolIcon className="icon-education"/>
                <Grid className="vertical-line">
                </Grid>
              </Grid>
              <Grid className="edu-details-text">
              <Typography className="year-text">
                  {resumeData.experiance.internship.duration}
                </Typography>
                <Typography variant="h6">
                 Internship:  {resumeData.experiance.internship.name}
                </Typography>
                  <Grid className="skill-text">
                    {resumeData.experiance.internship.skills.map((skill) => (   
                      <Typography variant="h6">{skill}</Typography>
                    ))}
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
          <Grid className="row">
              <Grid>
                <SchoolIcon className="icon-education"/>
                <Grid className="vertical-line">
                </Grid>
              </Grid>
              <Grid className="edu-details-text">
              <Typography className="year-text">
                {resumeData.experiance.fullTime.duration}
              </Typography>
                <Typography variant="h6">
                {resumeData.experiance.fullTime.name}
                </Typography>
                  <Grid className="skill-text">
                    {resumeData.experiance.fullTime.skills.map((skill) => (   
                      <Typography variant="h6">{skill}</Typography>
                    ))}
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grid>

      {/*Extracurricular*/}
      <Grid item xs={12}>
        <Typography variant="h5"  sx={{ fontSize: "30px", fontWeight: "bold", mb: 2, color: "white" }}>Extracurricular</Typography>
        <Grid container spacing={2} marginBottom={4}>
          {resumeData.extracurricular.map((skill) => (
            <Grid item xs={6}  key={skill.name}>
            <Card className="skill-card">
              <CardContent>
                <img src={skill.icon} height={"80px"} width={"80px"} style={{marginTop: "10px", marginBottom: "10px"}} />
                <Typography variant="h6">{skill.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
