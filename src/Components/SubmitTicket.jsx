import React from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import withResponsiveDrawer from "./withResponsiveDrawer";
import { styled } from "@mui/system";

const initialValues = {
  contactNumber: "9874563212",
  type: "",
  category: "",
  subcategory: "",
  subject: "",
  description: "",
  priority: "",
  attachment: "",
};

// Custom styled TextField with consistent border color and focus behavior
const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e3e3e3", // Standard border color
    },
    "&:hover fieldset": {
      borderColor: "#e9ecef", // Hover border color
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1976d2", // Focused border color
      borderWidth: "2px", // Increase border width on focus
    },
  },
  "& .MuiInputBase-input": {
    cursor: "default",
    color: "#474747",
    fontSize: "0.9rem",
  },
  "&:hover": {
    cursor: "cell", // Change cursor to pointer on hover
  },
});

// Custom styled textarea for description field
const CustomTextarea = styled("textarea")({
  width: "100%",
  padding: "10px",
  borderRadius: "4px",
  boxSizing: "border-box",
  borderColor: "#e3e3e3", // Standard border color
  "&:hover": {
    borderColor: "#e9ecef", // Hover border color
  },
  "&:focus": {
    outline: "none",
    borderColor: "#1976d2", // Focused border color
    borderWidth: "2px", // Increase border width on focus
  },
});

const SubmitTicket = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        marginBottom: "100px",
        marginTop: "20px",
        marginRight: { xs: "0px", sm: "0px", md: "0px", lg: "80px" },
      }}
    >
      <Box sx={{ padding: 3 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#474747",
            fontSize: "clamp(15px,2vw,20px)",
            fontWeight: "400",
          }}
        >
          Submit a New Ticket
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ mb: "2rem", color: "#A4A4A4", fontSize: "13px" }}
        >
          <span className="imp">*</span> These fields are mandatory
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Form data", values);
          }}
        >
          {({ handleChange, setFieldValue, values }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box
                    sx={{ border: "1px solid #e3e3e3", borderRadius: "8px" }}
                    component="fieldset"
                    borderColor="gray"
                    borderRadius="4px"
                    padding={3}
                  >
                    <legend
                      style={{
                        padding: "0 10px",
                        fontSize: "1.1rem",
                        letterSpacing: "0.5px ",
                        fontWeight: "400",
                        color: "#474747",
                      }}
                    >
                      Personal Details
                    </legend>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{
                            fontSize: "1rem",
                            color: "#474747",
                          }}
                        >
                          Employee Name
                        </label>
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          value="Nihal Koli Manesh"
                          InputProps={{ readOnly: true }}
                          sx={{ marginTop: "5px" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Employee Code
                        </label>
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          value="0009000021"
                          InputProps={{ readOnly: true }}
                          sx={{ marginTop: "5px" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Email ID
                        </label>
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          value="nihal.koli@excelindia.com"
                          InputProps={{ readOnly: true }}
                          sx={{ marginTop: "5px" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Designation
                        </label>
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          value="Senior Software Engineer"
                          InputProps={{ readOnly: true }}
                          sx={{ marginTop: "5px" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Department
                        </label>
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          value="Dept: Pearson Learning Services"
                          InputProps={{ readOnly: true }}
                          sx={{ marginTop: "5px" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Location
                        </label>
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          value="MYSORE"
                          InputProps={{ readOnly: true }}
                          sx={{ marginTop: "5px" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Contact Number <span className="imp">*</span>
                        </label>
                        <Field
                          as={TextField}
                          fullWidth
                          name="contactNumber"
                          variant="outlined"
                          placeholder="Contact No"
                          required
                          sx={{ marginTop: "5px" }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                {/* ========================= Ticket Details Form ============================ */}

                <Grid item xs={12}>
                  <Box
                    sx={{ border: "1px solid #e3e3e3", borderRadius: "8px" }}
                    component="fieldset"
                    borderColor="gray"
                    borderRadius="4px"
                    border={1}
                    padding={2}
                  >
                    <legend style={{ padding: "0 10px", fontSize: "1.25rem" }}>
                      Ticket Details
                    </legend>
                    <Grid container spacing={2}>
                      {/* Type field */}

                      <Grid item xs={12} md={4}>
                        <label htmlFor="">
                          Type <span>*</span>
                        </label>
                        <Field
                          as={TextField}
                          select
                          fullWidth
                          name="type"
                          variant="outlined"
                          required
                        >
                          <MenuItem value="">--Select--</MenuItem>
                          {/* Add your options here */}
                        </Field>
                      </Grid>

                      {/* Category and Subcategory fields */}
                      <Grid item xs={12} sm={6} md={4}>
                        <label htmlFor="">
                          Category <span>*</span>
                        </label>
                        <Field
                          as={TextField}
                          select
                          fullWidth
                          name="category"
                          variant="outlined"
                          required
                        >
                          <MenuItem value="">--Select--</MenuItem>
                          {/* Add your options here */}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label htmlFor="">
                          Subcategory <span>*</span>
                        </label>
                        <Field
                          as={TextField}
                          select
                          fullWidth
                          name="subcategory"
                          variant="outlined"
                          required
                        >
                          <MenuItem value="">--Select--</MenuItem>
                          {/* Add your options here */}
                        </Field>
                      </Grid>

                      {/* Subject field */}
                      <Grid item xs={12}>
                        <label htmlFor="">
                          Subject <span>*</span>
                        </label>
                        <Field
                          as={TextField}
                          fullWidth
                          name="subject"
                          variant="outlined"
                          required
                        />
                      </Grid>

                      {/* Description field */}
                      <Grid item xs={12}>
                        <label htmlFor="">
                          Description <span>*</span>
                        </label>
                        <CustomTextarea
                          as="textarea" // Use "textarea" here to render a textarea element
                          fullWidth
                          name="description"
                          rows={4}
                          required
                          onChange={handleChange}
                          value={values.description}
                        />
                      </Grid>

                      {/* Priority and Attachment fields */}
                      <Grid item xs={12} sm={6} md={4}>
                        <label htmlFor="">
                          Priority <span>*</span>
                        </label>
                        <Field
                          as={TextField}
                          select
                          fullWidth
                          name="priority"
                          variant="outlined"
                          required
                        >
                          <MenuItem value="">--Select--</MenuItem>
                          {/* Add your options here */}
                        </Field>
                      </Grid>
                      <Grid item xs={12} sm={6} md={5}>
                        <label htmlFor="">Attachment</label>
                        <input
                          id="file-upload"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(event) =>
                            setFieldValue(
                              "attachment",
                              event.target.files[0]
                                ? event.target.files[0].name
                                : ""
                            )
                          }
                        />
                        <CustomTextField
                          fullWidth
                          variant="outlined"
                          value={values.attachment || "No file chosen"}
                          onClick={() =>
                            document.getElementById("file-upload").click()
                          }
                          readOnly
                          sx={{ cursor: "cell" }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3 , backgroundColor:"#2e5c9e" }}
              >
                Submit Ticket
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default withResponsiveDrawer(SubmitTicket);
