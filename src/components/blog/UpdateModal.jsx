import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import useBlogCall from "../../hooks/useBlogCall";
import { Form, Formik } from "formik";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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

const UpdateModal = ({ upmodal, handleCloseUp }) => {
  const { categories, details } = useSelector((state) => state.blog);
  const { putBlogData } = useBlogCall();

  const navigate = useNavigate();
  //const [info, setInfo] = useState({ newBlog });
  return (
    <div>
      <Modal
        open={upmodal}
        onClose={handleCloseUp}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ width: 500, m: "auto", mt: 10 }}>
            <Formik
              initialValues={{
                title: details?.title,
                image: details?.image,
                content: details?.content,
                category: details?.category,
                status: details?.status,
              }}
              //validationSchema={blogSchema}
              onSubmit={(values, action) => {
                putBlogData("blogs", details?.id, values);
                action.resetForm();
                action.setSubmitting(false);
                navigate("/my-blog");
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
                    UPDATE BLOG
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
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
                      UPDATE BLOG
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default UpdateModal;
