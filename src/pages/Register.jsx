import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import registerLogo from "../assets/register.png";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";
import { Helmet } from "react-helmet";

const Register = () => {
  const { register } = useAuthCalls();
  return (
    <Container maxWidth="lg">
      <Helmet>
        <title>Blogs-Register</title>
      </Helmet>
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "95.2vh",
        }}
      >
        <Grid item md={6}>
          <Box sx={{ textAlign: "center" }}>
            <img src={registerLogo} alt="" width={300} />
          </Box>
          <Formik
            initial
            initialValues={{
              username: "",
              email: "",
              image: "",
              bio: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password });
              actions.resetForm();
              actions.setSubmitting();
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography>
              Do you have an account?<Link to="/login"> Login</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
