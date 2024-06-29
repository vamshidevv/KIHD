import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  Tooltip,
  Hidden,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
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

// Custom styled TextField with consistent border color and focus behavior
const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e3e3e3", // Standard border color
    },
    "&:hover fieldset": {
      borderColor: "#e3e3e3", // Hover border color
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2e5c9e61", // Focused border color
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
      borderColor: "#e3e3e3", // Custom border color
    },
    "&:hover fieldset": {
      borderColor: "#e3e3e3", // Hover border color
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2e5c9e61", // Focused border color
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

                <Grid item xs={12}>
                  <Box
                    sx={{ border: "1px solid #e3e3e3", borderRadius: "8px" }}
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
                          Type <span>*</span>
                        </label>
                        <TicketDetailsTextField
                          as={TextField}
                          select
                          fullWidth
                          name="type"
                          variant="outlined"
                          required
                        >
                          <MenuItem value="">--Select--</MenuItem>
                          {/* Add your options here */}
                        </TicketDetailsTextField>
                      </Grid>

                      {/* Category and Subcategory fields */}
                      <Grid item xs={12} sm={6} md={4}>
                        <label htmlFor="">
                          Category <span>*</span>
                        </label>
                        <TicketDetailsTextField
                          as={TextField}
                          select
                          fullWidth
                          name="category"
                          variant="outlined"
                          required
                        >
                          <MenuItem value="">--Select--</MenuItem>
                          {/* Add your options here */}
                        </TicketDetailsTextField>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label htmlFor="">
                          Subcategory <span>*</span>
                        </label>
                        <TicketDetailsTextField
                          as={TextField}
                          select
                          fullWidth
                          name="subcategory"
                          variant="outlined"
                          required
                        >
                          <MenuItem value="">--Select--</MenuItem>
                          {/* Add your options here */}
                        </TicketDetailsTextField>
                      </Grid>

                      {/* Subject field */}
                      <Grid item xs={12}>
                        <label htmlFor="">
                          Subject <span>*</span>
                        </label>
                        <TicketDetailsTextField
                          as={TextField}
                          fullWidth
                          name="subject"
                          variant="outlined"
                          required
                          sx={{
                            "& .MuiInputBase-input": {
                              cursor: "text",
                            },
                          }}
                        />
                      </Grid>

                      {/* Description field */}
                      <Grid item xs={12}>
                        <label htmlFor="">
                          Description <span>*</span>
                        </label>
                        <Field
                          as="textarea" // Use textarea instead of TextField for description
                          name="description"
                          // placeholder="Describe your issue or request here..."
                          variant="outlined"
                          multiline
                          rows={4}
                          required
                          style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "4px",
                            boxSizing: "border-box",
                            border: "1px solid #e3e3e3",
                            borderColor: "#e3e3e3",
                          }}
                        />
                      </Grid>

                      {/* Priority and Attachment fields */}
                      <Grid item xs={12} sm={6} md={4}>
                        <label htmlFor="">
                          Priority <span>*</span>
                        </label>
                        <TicketDetailsTextField
                          as={TextField}
                          select
                          fullWidth
                          name="priority"
                          variant="outlined"
                          required
                        >
                          <MenuItem value="--select--">--Select--</MenuItem>
                          {/* Add your options here */}
                        </TicketDetailsTextField>
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
                        <Box sx={{ position: "relative" }}>
                          <TicketDetailsTextField
                            fullWidth
                            variant="outlined"
                            value={values.attachment || "No file chosen"}
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
                                - Supported file types: .JPG, .PNG, .pdf, .doc,
                                .xlsx, .zip, .txt, .xls
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
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
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
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default withResponsiveDrawer(SubmitTicket);
