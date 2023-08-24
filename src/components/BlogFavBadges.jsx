import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: -1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function BlogFavBadges({ likes, id, likes_n }) {
  const { postBlogLikeData } = useBlogCall();
  const { currentUser, data } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const like = likes_n.some((item) => item.user_id === data.id);

  return (
    <IconButton
      onClick={() => {
        currentUser ? postBlogLikeData("likes", id) : navigate("/login");
      }}
      aria-label="cart"
    >
      <StyledBadge badgeContent={likes} color="secondary">
        <FavoriteIcon sx={like ? { color: "red" } : { color: "" }} />
      </StyledBadge>
    </IconButton>
  );
}

export function BlogCommentBadges({ comment_count, open, setOpen }) {
  return (
    <IconButton
      onClick={() => setOpen(!open)}
      sx={{ ml: "10px" }}
      aria-label="cart"
    >
      <StyledBadge badgeContent={comment_count} color="secondary">
        <CommentIcon />
      </StyledBadge>
    </IconButton>
  );
}

export function BlogVisibleBadges({ post_views }) {
  return (
    <IconButton aria-label="cart" sx={{ ml: "10px" }}>
      <StyledBadge badgeContent={post_views} color="secondary">
        <VisibilityIcon />
      </StyledBadge>
    </IconButton>
  );
}
