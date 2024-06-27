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
  contactNumber: "",
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
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Submit a New Ticket
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: "2rem" }}>
        <span style={{ color: "red" }}>*</span> These fields are mandatory
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
                <Typography variant="h6" gutterBottom>
                  Personal Details
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <label htmlFor="">Employee Name</label>
                <TextField
                  fullWidth
                  variant="outlined"
                  value="Nihal Koli Manesh"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Employee Code"
                  variant="outlined"
                  value="0009000021"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email ID"
                  variant="outlined"
                  value="nihal.koli@excelindia.com"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Designation"
                  variant="outlined"
                  value="Senior Software Engineer"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Department"
                  variant="outlined"
                  value="Dept: Pearson Learning Services"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Location"
                  variant="outlined"
                  value="MYSORE"
                  InputProps={{ readOnly: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  fullWidth
                  name="contactNumber"
                  label="Contact Number"
                  variant="outlined"
                  required
                />
              </Grid>

            
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
  );
};

export default withResponsiveDrawer(SubmitTicket);
