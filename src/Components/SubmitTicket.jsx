import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  Tooltip,
  ThemeProvider,
  createTheme,
  Alert,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import withResponsiveDrawer from "./withResponsiveDrawer";
import { styled } from "@mui/system";
import InfoIcon from "@mui/icons-material/Info";

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

// Define Yup validation schema
const validationSchema = Yup.object().shape({
  contactNumber: Yup.string().required("Contact number is required"),
  type: Yup.string().required("Type is required"),
  category: Yup.string().required("Category is required"),
  subcategory: Yup.string().required("Subcategory is required"),
  subject: Yup.string().required("Subject is required"),
  description: Yup.string().required("Description is required"),
  priority: Yup.string().required("Priority is required"),
});

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e3e3e3",
    },
    "&:hover fieldset": {
      borderColor: "#e3e3e3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e3e3e3",
    },
  },
  "& .MuiInputBase-input": {
    cursor: "default",
    backgroundColor: "#e9ecef",
    color: "#474747",
    fontSize: "0.9rem",
  },
});

const TicketDetailsTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e3e3e3",
    },
    "&:hover fieldset": {
      borderColor: "#e3e3e3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2e5c9e61",
      borderWidth: "3px",
    },
  },
  "& .MuiInputBase-input": {
    cursor: "default",
    color: "#474747",
    fontSize: "0.9rem",
  },
});

const SubmitTicket = () => {
  const [fileSizeError, setFileSizeError] = useState(false);
  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#2e5c9e61",
              color: "white",
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        pb={2}
        sx={{
          backgroundColor: "white",
          marginBottom: "100px",
          marginTop: "20px",
          marginRight: { xs: "0px", sm: "0px", md: "0px", lg: "80px" },
        }}
      >
        <Box sx={{ padding: 3 }}>
          <Typography
            p={2}
            variant="h5"
            sx={{
              color: "#474747",
              fontSize: "clamp(15px,2vw,20px)",
              fontWeight: "400",
            }}
          >
            Submit a New Ticket
          </Typography>
          <Typography
            pl={2}
            variant="body2"
            color="textSecondary"
            sx={{ mb: "2rem", color: "#A4A4A4", fontSize: "13px" }}
          >
            <span className="imp">*</span> These fields are mandatory
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Form data", values);
            }}
          >
            {({ handleChange, setFieldValue, values, errors, touched }) => (
              <Form>
                <Grid container spacing={8}>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        border: "1px solid #e3e3e3",
                        borderRadius: "8px",
                      }}
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
                            sx={{
                              marginTop: "5px",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor: "#e3e3e3", // Custom border color
                                },
                                "&:hover fieldset": {
                                  borderColor: "#e3e3e3", // Hover border color
                                },
                                "&.Mui-focused fieldset": {
                                  borderWidth: "3px",
                                  borderColor: "#2e5c9e61", // Focused border color
                                },
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  {/* ========================= Ticket Details Form ============================ */}

                  {touched.contactNumber && errors.contactNumber && (
                    <Typography variant="caption" color="error">
                      {errors.contactNumber}
                    </Typography>
                  )}
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        border: "1px solid #e3e3e3",
                        borderRadius: "8px",
                      }}
                      component="fieldset"
                      borderColor="gray"
                      borderRadius="4px"
                      padding={2}
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
                        Ticket Details
                      </legend>
                      <Grid container spacing={2}>
                        {/* Type field */}
                        <Grid item xs={12} md={4}>
                          <label htmlFor="">
                            Type <span className="imp">*</span>
                          </label>
                          <Field
                            as={TicketDetailsTextField}
                            select
                            fullWidth
                            name="type"
                            variant="outlined"
                            onChange={(event) => {
                              handleChange(event);
                              setFieldValue("type", event.target.value);
                            }}
                            SelectProps={{
                              displayEmpty: true,
                              renderValue: (value) =>
                                value === "" ? "--Select--" : value,
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor:
                                    touched.type && errors.type
                                      ? "#f44336"
                                      : touched.type && !errors.type
                                      ? "#4caf50"
                                      : touched.type
                                      ? "#2e5c9e61"
                                      : "#e3e3e3",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#e3e3e3",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor:
                                    touched.type && errors.type
                                      ? "#d32f2f6e"
                                      : touched.type && !errors.type
                                      ? "#00800075"
                                      : "#2e5c9e61",
                                  borderWidth: "3px",
                                },
                              },
                            }}
                          >
                            <MenuItem value="" disabled>
                              --Select--
                            </MenuItem>
                            <MenuItem value="Issue">Issue</MenuItem>
                            <MenuItem value="Request">Request</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                          </Field>
                          {touched.type && errors.type && (
                            <Typography variant="caption" color="error">
                              {errors.type}
                            </Typography>
                          )}
                        </Grid>

                        {/* Category and Subcategory fields */}
                        <Grid item xs={12} sm={6} md={4}>
                          <label htmlFor="">
                            Category <span className="imp">*</span>
                          </label>

                          <Field
                            as={TicketDetailsTextField}
                            select
                            fullWidth
                            name="category"
                            variant="outlined"
                            onChange={(event) => {
                              handleChange(event);
                              setFieldValue("category", event.target.value);
                            }}
                            SelectProps={{
                              displayEmpty: true,
                              renderValue: (value) =>
                                value === "" ? "--Select--" : value,
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor:
                                    touched.category && errors.category
                                      ? "#f44336"
                                      : touched.category && !errors.category
                                      ? "#4caf50"
                                      : touched.category
                                      ? "#2e5c9e61"
                                      : "#e3e3e3",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#e3e3e3",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor:
                                    touched.category && errors.category
                                      ? "#d32f2f6e"
                                      : touched.category && !errors.category
                                      ? "#00800075"
                                      : "#2e5c9e61",
                                  borderWidth: "3px",
                                },
                              },
                            }}
                          >
                            <MenuItem value="" disabled>
                              --Select--
                            </MenuItem>
                            <MenuItem value="Software">Software</MenuItem>
                            <MenuItem value="Hardware">Hardware</MenuItem>
                            <MenuItem value="Network">Network</MenuItem>
                          </Field>
                          {touched.category && errors.category && (
                            <Typography variant="caption" color="error">
                              {errors.category}
                            </Typography>
                          )}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <label htmlFor="">
                            Subcategory <span className="imp">*</span>
                          </label>
                          <Field
                            as={TicketDetailsTextField}
                            select
                            fullWidth
                            name="subcategory"
                            variant="outlined"
                            onChange={(event) => {
                              handleChange(event);
                              setFieldValue("subcategory", event.target.value);
                            }}
                            SelectProps={{
                              displayEmpty: true,
                              renderValue: (value) =>
                                value === "" ? "--Select--" : value,
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor:
                                    touched.subcategory && errors.subcategory
                                      ? "#f44336"
                                      : touched.subcategory &&
                                        !errors.subcategory
                                      ? "#4caf50"
                                      : touched.subcategory
                                      ? "#2e5c9e61"
                                      : "#e3e3e3",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#e3e3e3",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor:
                                    touched.subcategory && errors.subcategory
                                      ? "#d32f2f6e"
                                      : touched.subcategory &&
                                        !errors.subcategory
                                      ? "#00800075"
                                      : "#2e5c9e61",
                                  borderWidth: "3px",
                                },
                              },
                            }}
                          >
                            <MenuItem value="" disabled="true">
                              --Select--
                            </MenuItem>
                            <MenuItem value="Application">Application</MenuItem>
                            <MenuItem value="System">System</MenuItem>
                            <MenuItem value="Infrastructure">
                              Infrastructure
                            </MenuItem>
                          </Field>
                          {touched.subcategory && errors.subcategory && (
                            <Typography variant="caption" color="error">
                              {errors.subcategory}
                            </Typography>
                          )}
                        </Grid>

                        {/* Subject field */}
                        <Grid item xs={12}>
                          <label htmlFor="">
                            Subject <span className="imp">*</span>
                          </label>
                          <Field
                            as={TicketDetailsTextField}
                            fullWidth
                            name="subject"
                            variant="outlined"
                            sx={{
                              "& .MuiInputBase-input": {
                                cursor: "text",
                              },
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor:
                                    touched.subject && errors.subject
                                      ? "#f44336"
                                      : touched.subject && !errors.subject
                                      ? "#4caf50"
                                      : touched.subject
                                      ? "#2e5c9e61"
                                      : "#e3e3e3",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#e3e3e3",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor:
                                    touched.subject && errors.subject
                                      ? "#d32f2f6e"
                                      : touched.subject && !errors.subject
                                      ? "#00800075"
                                      : "#2e5c9e61",
                                  borderWidth: "3px",
                                },
                              },
                            }}
                            onChange={handleChange}
                          />
                          {touched.subject && errors.subject && (
                            <Typography variant="caption" color="error">
                              {errors.subject}
                            </Typography>
                          )}
                        </Grid>

                        {/* Description field */}
                        <Grid item xs={12}>
                          <label htmlFor="">
                            Description <span className="imp">*</span>
                          </label>
                          <Field
                            as={TicketDetailsTextField} // change this to textarea input
                            name="description"
                            variant="outlined"
                            multiline
                            rows={4}
                            style={{
                              width: "100%",
                              padding: "10px",
                              borderRadius: "4px",
                              boxSizing: "border-box",
                              // border: "1px solid #e3e3e3",
                              borderColor: "#e3e3e3",
                            }}
                            onChange={handleChange}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor:
                                    touched.description && errors.description
                                      ? "#f44336"
                                      : touched.description &&
                                        !errors.description
                                      ? "#4caf50"
                                      : touched.description
                                      ? "#2e5c9e61"
                                      : "#e3e3e3",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#e3e3e3",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor:
                                    touched.description && errors.description
                                      ? "#d32f2f6e"
                                      : touched.description &&
                                        !errors.description
                                      ? "#00800075"
                                      : "#2e5c9e61",
                                  borderWidth: "3px",
                                },
                              },
                            }}
                          />
                          {touched.description && errors.description && (
                            <Typography variant="caption" color="error">
                              {errors.description}
                            </Typography>
                          )}
                        </Grid>

                        {/* Priority and Attachment fields */}
                        <Grid item xs={12} sm={6} md={4}>
                          <label htmlFor="">
                            Priority <span className="imp">*</span>
                          </label>
                          <Field
                            as={TicketDetailsTextField}
                            select
                            fullWidth
                            name="priority"
                            variant="outlined"
                            onChange={(event) => {
                              handleChange(event);
                              setFieldValue("priority", event.target.value);
                            }}
                            SelectProps={{
                              displayEmpty: true,
                              renderValue: (value) =>
                                value === "" ? "--Select--" : value,
                            }}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderColor:
                                    touched.priority && errors.priority
                                      ? "#f44336"
                                      : touched.priority && !errors.priority
                                      ? "#4caf50"
                                      : touched.priority
                                      ? "#2e5c9e61"
                                      : "#e3e3e3",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#e3e3e3",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor:
                                    touched.priority && errors.priority
                                      ? "#d32f2f6e"
                                      : touched.priority && !errors.priority
                                      ? "#00800075"
                                      : "#2e5c9e61",
                                  borderWidth: "3px",
                                },
                              },
                            }}
                          >
                            <MenuItem value="">--Select--</MenuItem>
                            <MenuItem value="High">P1 - Critical</MenuItem>
                            <MenuItem value="High">P2 - High</MenuItem>
                            <MenuItem value="Medium">P3 - Medium</MenuItem>
                            <MenuItem value="Low">P4 - Low</MenuItem>
                          </Field>
                          {touched.priority && errors.priority && (
                            <Typography variant="caption" color="error">
                              {errors.priority}
                            </Typography>
                          )}
                        </Grid>
                        <Grid item xs={12} sm={6} md={5}>
                          <label htmlFor="">Attachment</label>
                          <input
                            id="file-upload"
                            type="file"
                            style={{ display: "none" }}
                            onChange={(event) => {
                              const file = event.target.files[0];
                              if (file.size > 5 * 1024 * 1024) {
                                setFileSizeError(true);
                                setFieldValue("attachment", "");
                              } else {
                                setFileSizeError(false);
                                setFieldValue(
                                  "attachment",
                                  file ? file.name : ""
                                );
                              }
                            }}
                          />
                          <Box sx={{ position: "relative" }}>
                            <TicketDetailsTextField
                              fullWidth
                              variant="outlined"
                              value={
                                values.attachment
                                  ? values.attachment.length > 20
                                    ? `${values.attachment.substring(0, 20)}...`
                                    : values.attachment
                                  : "No file chosen"
                              }
                              onClick={() =>
                                document.getElementById("file-upload").click()
                              }
                              readOnly
                              sx={{
                                "& .MuiInputBase-input": {
                                  cursor: "pointer",
                                },
                              }}
                            />
                            <Tooltip
                              title={
                                <>
                                  - Supported file types: .JPG, .PNG, .pdf,
                                  .doc, .xlsx, .zip, .txt, .xls
                                  <br />- Maximum file size allowed is 5 Mb.
                                </>
                              }
                              placement="top"
                              arrow
                            >
                              <InfoIcon
                                sx={{
                                  color: "#474747",
                                  cursor: "pointer",
                                  position: "absolute",
                                  right: 10,
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                }}
                              />
                            </Tooltip>
                          </Box>
                          {fileSizeError && (
                            <Alert severity="error">
                              Maximum file size allowed is 5MB.
                            </Alert>
                          )}
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 3,
                      backgroundColor: "#2e5c9e",
                      "&:hover": { backgroundColor: "#2e5c9ecc" },
                    }}
                  >
                    Submit Ticket
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default withResponsiveDrawer(SubmitTicket);
