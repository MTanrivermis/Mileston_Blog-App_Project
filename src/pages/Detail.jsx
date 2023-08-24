import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BlogFavBadges, {
  BlogCommentBadges,
  BlogVisibleBadges,
} from "../components/BlogFavBadges";
import { useState } from "react";
import CommentCard from "../components/blog/CommentCard";

const Detail = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const { details } = useSelector((state) => state.blog);

  const tarih = new Date(details.publish_date);

  return (
    <Box minheight={{ xs: "100vh" }}>
      <Box sx={{ width: "600px", m: "auto", p: 2 }}>
        <Box>
          <CardMedia
            component="img"
            height="500"
            image={details.image}
            alt="green iguana"
            sx={{
              objectFit: "contain",
              width: "500px",
              m: "auto",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "start",
              width: "95%",
              p: 0.5,
              gap: "15px",
            }}
          >
            <AccountCircleIcon
              fontSize="large"
              sx={{ color: "orange", fontSize: "60px" }}
            />

            <Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{ fontWeight: "500" }}
              >
                {details.author}
              </Typography>
              <Typography
                variant="h6"
                component="h4"
                sx={{ fontWeight: "500" }}
              >
                {tarih.toDateString()}
              </Typography>
            </Box>
          </Box>
          <Typography gutterBottom variant="h5" component="div">
            {details.title}
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            sx={{ fontSize: "15px", color: "#25263b", letterSpacing: "2px" }}
          >
            {details.content}
          </Typography>
        </Box>
        <Box sx={{ mt: "20px" }}>
          <BlogFavBadges
            likes_n={details.likes_n}
            id={details.id}
            likes={details.likes}
          />
          <BlogCommentBadges
            setOpen={setOpen}
            open={open}
            comment_count={details.comment_count}
          />
          <BlogVisibleBadges post_views={details.post_views} />
        </Box>

        {open ? <CommentCard details={details} /> : ""}
      </Box>
    </Box>
  );
};

export default Detail;
