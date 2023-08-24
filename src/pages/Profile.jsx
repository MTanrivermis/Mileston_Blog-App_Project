import { Box, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { profileBox, profileTypograf } from "../styles/globalStyles";
import LazyLoad from "react-lazy-load";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { data } = useSelector((state) => state.auth);
  console.log(data);
  return (
    <>
      <Box height={{ xs: "73.9vh" }}>
        <Helmet>
          <title>Blogs-Profile</title>
        </Helmet>
        <Box sx={profileBox}>
          <LazyLoad>
            <CardMedia
              component="img"
              height="300"
              sx={{
                borderRadius: "10px",
                objectFit: "contain",
              }}
              image={data.image}
              alt="profile_Foto"
              lazy
            />
          </LazyLoad>
          <Box sx={profileTypograf}>
            <Typography variant="h5" component="h2">
              {data.username}
            </Typography>
          </Box>
          <Box sx={profileTypograf}>
            <Typography variant="h5" component="h2">
              {data.email}
            </Typography>
          </Box>
          <Box sx={profileTypograf}>
            <Typography variant="h5" component="h2">
              {data.bio}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;

// import { Box, CardMedia, Typography } from "@mui/material";
// import { useSelector } from "react-redux";
// import { profileTypograf, profileBox } from "../styles/globalStyles";
// import LazyLoad from "react-lazy-load";
// import { Helmet } from "react-helmet";
// const Profile = () => {
//   const { data } = useSelector((state) => state.auth);
//   return (
//     <Box height={{ xs: "79.2vh", md: "70.4vh", lg: "79.1vh" }}>
//       <Helmet>
//         <title>Blog-Profile</title>
//       </Helmet>
//       <Box width={{ xs: "300px", md: "500px" }} sx={profileBox}>
//         <LazyLoad>
//           <CardMedia
//             component="img"
//             height="300"
//             sx={{ width: "300px", borderRadius: "10px", objectFit: "contain" }}
//             image={data.image}
//             alt="Paella dish"
//           />
//         </LazyLoad>
//         <Typography variant="h5" component="h2" sx={profileTypograf}>
//           {data.username}
//         </Typography>
//         <Typography variant="h5" component="h2" sx={profileTypograf}>
//           {data.email}
//         </Typography>
//         <Typography variant="h5" component="h2" sx={profileTypograf}>
//           {data.bio}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };
// export default Profile;
