import { Box, CardMedia, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
const About = () => {
  const { data } = useSelector((state) => state.auth);
  console.log(data);
  return (
    <Box height={{ md: "81.1vh", xs: "95vh" }}>
      <Helmet>
        <title>Blogs-About</title>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            mt: 5,
            width: 400,
            height: 500,
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          },
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <lazyLoad>
            <CardMedia
              component="img"
              height="250"
              sx={{ objectFit: "contain", mb: 2 }}
              image={data.image}
              alt="profile_Foto"
            />
          </lazyLoad>
          <Typography gutterBottom variant="h4" component="div">
            Midnight
          </Typography>
          <Typography variant="h5">Full Stack Developer</Typography>
          <Box sx={{ mt: "20px" }}>
            <Link to="https://github.com/MTanrivermis" target="_blank">
              <GitHubIcon
                sx={{
                  color: "black",
                  outline: "none",
                  "&:hover": {
                    color: "orange",
                    transition: "color .8s ease",
                    borderRadius: "50%",
                    padding: "2px",
                  },
                  fontSize: 50,
                }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mtanrivermis/"
              target="_blank"
            >
              <LinkedInIcon
                sx={{
                  color: "#0A0707",
                  "&:hover": {
                    color: "#0e76a8",
                    transition: "color .8s ease",
                    borderRadius: "50%",
                    padding: "2px",
                  },
                  fontSize: 50,
                }}
              />
            </Link>
            <Link to="https://www.instagram.com/mr.phixiuss/" target="_blank">
              <InstagramIcon
                sx={{
                  color: "#0A0707",
                  "&:hover": {
                    color: "#ef64af",
                    transition: "color .8s ease",
                    borderRadius: "50%",
                    padding: "2px",
                  },
                  fontSize: 50,
                }}
              />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <YouTubeIcon
                color="inherit"
                sx={{
                  color: "#0A0707",
                  "&:hover": {
                    color: "red",
                    transition: "color .8s ease",
                    borderRadius: "50%",
                    padding: "2px",
                  },
                  fontSize: 50,
                }}
              />
            </Link>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default About;
