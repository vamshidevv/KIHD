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

const SubmitTicket = () => {
  return (
    <div style={{ backgroundColor: "white", padding: "2rem" }}>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Submit a New Ticket
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: "2rem" }}>
          <span className="imp">*</span> These fields are mandatory
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Form data", values);
          }}
        >
          {({ handleChange, setFieldValue }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box
                    sx={{ border: "1px solid #e3e3e3" }}
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
                      Personal Details
                    </legend>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Employee Name
                        </label>
                        <TextField
                          fullWidth
                          variant="outlined"
                          value="Nihal Koli Manesh"
                          InputProps={{
                            readOnly: true,
                            style: {
                              backgroundColor: "#e9ecef",
                              color: "#474747",
                              fontSize: "0.9rem",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Employee Code
                        </label>
                        <TextField
                          fullWidth
                          variant="outlined"
                          value="0009000021"
                          InputProps={{
                            readOnly: true,
                            style: {
                              backgroundColor: "#e9ecef",
                              color: "#474747",
                              fontSize: "0.9rem",
                            },
                          }}
                          sx={{ backgroundColor: "#e9ecef" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Email ID
                        </label>
                        <TextField
                          fullWidth
                          variant="outlined"
                          value="nihal.koli@excelindia.com"
                          InputProps={{
                            readOnly: true,
                            style: {
                              backgroundColor: "#e9ecef",
                              color: "#474747",
                              fontSize: "0.9rem",
                            },
                          }}
                          sx={{ backgroundColor: "#e9ecef" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Designation
                        </label>
                        <TextField
                          fullWidth
                          variant="outlined"
                          value="Senior Software Engineer"
                          InputProps={{
                            readOnly: true,
                            style: {
                              backgroundColor: "#e9ecef",
                              color: "#474747",
                              fontSize: "0.9rem",
                            },
                          }}
                          sx={{ backgroundColor: "#e9ecef" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Department
                        </label>
                        <TextField
                          fullWidth
                          variant="outlined"
                          value="Dept: Pearson Learning Services"
                          InputProps={{
                            readOnly: true,
                            style: {
                              backgroundColor: "#e9ecef",
                              color: "#474747",
                              fontSize: "0.9rem",
                            },
                          }}
                          sx={{ backgroundColor: "#e9ecef" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label
                          htmlFor=""
                          style={{ fontSize: "1rem", color: "#474747" }}
                        >
                          Location
                        </label>
                        <TextField
                          fullWidth
                          variant="outlined"
                          value="MYSORE"
                          InputProps={{
                            readOnly: true,
                            style: {
                              backgroundColor: "#e9ecef",
                              color: "#474747",
                              fontSize: "0.9rem",
                            },
                          }}
                          sx={{ backgroundColor: "#e9ecef" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <label htmlFor="">
                          Contact Number <span className="imp">*</span>
                        </label>
                        <Field
                          as={TextField}
                          fullWidth
                          name="contactNumber"
                          variant="outlined"
                          placeholder=" Contact No"

                          required
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                {/* ========================= Ticket Details Form ============================ */}

             
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Submit Ticket
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default withResponsiveDrawer(SubmitTicket);
