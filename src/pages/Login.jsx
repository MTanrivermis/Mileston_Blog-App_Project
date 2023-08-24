import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import LoginForm, { loginSchema } from "../components/auth/LoginForm";
import { Formik } from "formik";
import useAuthCalls from "../hooks/useAuthCalls";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login } = useAuthCalls();

  return (
    <Container maxWidth="lg">
      <Helmet>
        <title>Blogs-Login</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "71.8vh",
          mt: "100px",
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={6}
            color="secondary.light"
          >
            LOGIN
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, action) => {
              console.log(values.email);
              login(values);
              action.resetForm();
              action.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography>
              Do you have not an account?<Link to="/register"> Sign Up</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
