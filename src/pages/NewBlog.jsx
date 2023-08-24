import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { object, string } from "yup";
import { Helmet } from "react-helmet";

const blogSchema = object({
  title: string().required("Bu alan zorunludur"),
  image: string().required("Bu alan zorunludur"),
  content: string().required("Bu alan zorunludur"),
  category: string().required("Bu alan zorunludur"),
  status: string().required("Bu alan zorunludur"),
});

const status = [
  {
    id: "d",
    name: "Draft",
  },
  {
    id: "p",
    name: "Published",
  },
];

const NewBlog = () => {
  const { categories } = useSelector((state) => state.blog);
  const { getCategoryData, createNewBlog } = useBlogCall();

  useEffect(() => {
    getCategoryData("categories");
  }, []);

  return (
    <Box height={{ xs: "80vh", md: "73.9vh" }}>
      <Box
        width={{ xs: 350, md: 500 }}
        sx={{
          p: 5,
          m: "auto",
          mt: 10,
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <Helmet>
          <title>New-Blog</title>
        </Helmet>
        <Formik
          initialValues={{
            title: "",
            image: "",
            content: "",
            category: "",
            status: "",
          }}
          validationSchema={blogSchema}
          onSubmit={(values, action) => {
            createNewBlog("blogs", values);
            action.resetForm();
            action.setSubmitting(false);
          }}
        >
          {({ values, handleChange, errors, touched, handleBlur }) => (
            <Form>
              <Typography
                variant="h4"
                align="center"
                mb={5}
                color="orange"
                sx={{ fontWeight: "600" }}
              >
                NEW BLOG
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  label="Title *"
                  name="title"
                  id="title"
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  error={touched.title && Boolean(errors.title)}
                  helperText={errors.title}
                />
                <TextField
                  label="Image URL *"
                  name="image"
                  id="image"
                  type="url"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.image}
                  error={touched.image && Boolean(errors.image)}
                  helperText={errors.image}
                />
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-label">
                    Category *
                  </InputLabel>
                  <Select
                    label="Category *"
                    id="category"
                    name="category"
                    variant="outlined"
                    value={values.category}
                    onChange={handleChange}
                    error={touched.category && Boolean(errors.category)}
                    helperText={errors.category}
                  >
                    {categories.map(({ id, name }) => (
                      <MenuItem value={id} key={id}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-label">
                    Status *
                  </InputLabel>
                  <Select
                    label="Status"
                    id="status"
                    name="status"
                    variant="outlined"
                    value={values.status}
                    onChange={handleChange}
                    error={touched.status && Boolean(errors.status)}
                    helperText={errors.status}
                  >
                    {status.map(({ id, name }) => (
                      <MenuItem value={id} key={id}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  label="Content *"
                  name="content"
                  id="content"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.content}
                  error={touched.content && Boolean(errors.content)}
                  helperText={errors.content}
                />

                <Button
                  variant="contained"
                  type="submit"
                  sx={{ backgroundColor: "orange", fontWeight: "600" }}
                >
                  ADD NEW BLOG
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default NewBlog;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { useSelector } from "react-redux";

// export default function BasicSelect() {
//   const { categories } = useSelector((state) => state.blog);

//   const [age, setAge] = React.useState("");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Category</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           {categories.map(({ id, name }) => (
//             <MenuItem value={id} key={id}>
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
