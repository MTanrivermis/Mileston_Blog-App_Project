export const linkStyle = {
  fontWeight: "600",
  "&:hover": { color: "orange", cursor: "pointer" },
  p: 0.5,
};

export const profileTypograf = {
  mt: 3,
  color: "black",
  fontWeight: "600",
};

export const profileBox = {
  width: "55vh",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  m: "auto",
  backgroundColor: { xs: "grey", md: "blackgrey", lg: "lightgrey" },
  height: { xs: "500px", md: "600px" },
  mt: 10,
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
};

export const badgeBox = {
  display: "flex",
  justifyContent: "space-between",
  width: "97%",
  mt: 5,
};

export const btnReadMore = {
  backgroundColor: "darkgrey",
  color: "black",
  fontWeight: "600",
  "&: hover": {
    backgroundColor: "black",
    color: "white",
  },
};
