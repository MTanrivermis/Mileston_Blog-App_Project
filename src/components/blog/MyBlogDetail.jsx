import { Box, Button, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BlogFavBadges, {
  BlogCommentBadges,
  BlogVisibleBadges,
} from "../BlogFavBadges";
import { useState } from "react";
import CommentCard from "../../components/blog/CommentCard";

import DeleteModal from "../../components/blog/DeleteModal";
import UpdateModal from "../../components/blog/UpdateModal";
import { Helmet } from "react-helmet";

const Detail = () => {
  //! COMMENT
  const [open, setOpen] = useState(false);
  const { details } = useSelector((state) => state.blog);

  const tarih = new Date(details.publish_date);

  //!DELETE MODAL
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  //! UPDATE MODAL
  const [upmodal, setUpModal] = useState(false);
  const handleOpenUp = () => setUpModal(true);
  const handleCloseUp = () => setUpModal(false);

  return (
    <Box>
      <Helmet>
        <title>Blogs-Detail</title>
      </Helmet>
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

        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 7 }}>
          <Box>
            <Button
              sx={{ backgroundColor: "green", fontWeight: "600" }}
              color="primary"
              onClick={() => handleOpenUp()}
            >
              UPDATE BLOG
            </Button>
          </Box>
          <Box>
            <Button
              sx={{ backgroundColor: "red", fontWeight: "600" }}
              color="primary"
              onClick={() => handleOpen()}
            >
              DELETE BLOG
            </Button>
          </Box>
          <DeleteModal
            modal={modal}
            handleClose={handleClose}
            detailsId={details.id}
          />
          <UpdateModal
            upmodal={upmodal}
            setUpModal={setUpModal}
            handleOpenUp={handleOpenUp}
            handleCloseUp={handleCloseUp}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
