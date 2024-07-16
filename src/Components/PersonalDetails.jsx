import React, { useEffect, useState } from "react";
import { Box, TextField, Grid, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { styled } from "@mui/system";

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

const initialValues = {
  contactNumber: "",
};

const PersonalDetails = () => {
  const [user, setUser] = useState({});

  console.log("userState", user);

  useEffect(() => {
    const getUser = sessionStorage.getItem("foundUser");
    setUser(JSON.parse(getUser));
  }, []);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("Form data", values);
        }}
      >
        {({ handleChange, setFieldValue, values, errors, touched }) => (
          <Form>
            <Grid container spacing={8} pb={5}>

              {/* ========================= Personal Details Form ============================ */}

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
                        value={user.username}
                        InputProps={{ readOnly: true }}
                        sx={{
                          marginTop: "5px",
                          "& input": {
                            textTransform: "capitalize",
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
                      <CustomTextField
                        fullWidth
                        variant="outlined"
                        value={user.empolyeecode}
                        InputProps={{ readOnly: true }}
                        sx={{
                          marginTop: "5px",
                          "& input": {
                            textTransform: "capitalize",
                          },
                        }}
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
                        value={user.email}
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
                        value={user.designation}
                        InputProps={{ readOnly: true }}
                        sx={{
                          marginTop: "5px",
                          "& input": {
                            textTransform: "capitalize",
                          },
                        }}
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
                        value={user.department}
                        InputProps={{ readOnly: true }}
                        sx={{
                          marginTop: "5px",
                          "& input": {
                            textTransform: "capitalize",
                          },
                        }}
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
                        value={user.location}
                        InputProps={{ readOnly: true }}
                        sx={{
                          marginTop: "5px",
                          "& input": {
                            textTransform: "capitalize",
                          },
                        }}
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
                        value={user.contact}
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
                      
                      {touched.contactNumber && errors.contactNumber && (
                        <Typography variant="caption" color="error">
                          {errors.contactNumber}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              {/* ========================= Ticket Details Form ============================ */}

              {/* 
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
                        <Grid item xs={12} md={4} lg={4}>
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
                              setSelectedType(event.target.value);
                              setSelectedCategory("");
                              setSelectedSubcategory("");
                              setFieldValue("type", event.target.value);
                              setIsCategory(false);
                              if (
                                event.target.value ===
                                "DevOps/Release Engineering"
                              ) {
                                setIsProjectTitle(true);
                              } else {
                                setIsProjectTitle(false);
                              }
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
                            {typeOptions.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </Field>
                          {touched.type && errors.type && (
                            <Typography variant="caption" color="error">
                              {errors.type}
                            </Typography>
                          )}
                        </Grid>


                        <Grid
                          item
                          xs={12}
                          md={4}
                          lg={4}
                          sx={{
                            visibility: !isProjectTitle ? "Hidden" : "Visible",
                          }}
                        >
                          <label htmlFor="">
                            Project Title <span className="imp">*</span>
                          </label>
                          <Field
                            as={TicketDetailsTextField}
                            select
                            fullWidth
                            name="projectTitle"
                            variant="outlined"
                            onChange={(event) => {
                              setFieldValue("projectTitle", event.target.value);
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
                                    touched.projectTitle && errors.projectTitle
                                      ? "#f44336"
                                      : touched.projectTitle &&
                                        !errors.projectTitle
                                      ? "#4caf50"
                                      : touched.projectTitle
                                      ? "#2e5c9e61"
                                      : "#e3e3e3",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#e3e3e3",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor:
                                    touched.projectTitle && errors.projectTitle
                                      ? "#d32f2f6e"
                                      : touched.projectTitle &&
                                        !errors.projectTitle
                                      ? "#00800075"
                                      : "#2e5c9e61",
                                  borderWidth: "3px",
                                },
                              },
                            }}
                          >
                            {projectOptions.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </Field>
                          {touched.projectTitle && errors.projectTitle && (
                            <Typography variant="caption" color="error">
                              {errors.projectTitle}
                            </Typography>
                          )}
                        </Grid>

                        <Grid item xs={12} md={4} lg={4}></Grid>

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
                            disabled={isCategory}
                            onChange={(event) => {
                              setSelectedCategory(event.target.value);
                              setSelectedSubcategory("");
                              setFieldValue("category", event.target.value);
                              setIsSubCategory(false);
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
                            {selectedType &&
                              categoryOptions[selectedType].map((option) => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
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
                            disabled={isSubCategory}
                            onChange={(event) => {
                              setSelectedSubcategory(event.target.value);
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
                            {selectedCategory &&
                              subcategoryOptions[selectedCategory].map(
                                (option) => (
                                  <MenuItem key={option} value={option}>
                                    {option}
                                  </MenuItem>
                                )
                              )}
                          </Field>
                          {touched.subcategory && errors.subcategory && (
                            <Typography variant="caption" color="error">
                              {errors.subcategory}
                            </Typography>
                          )}
                        </Grid>

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

                        <Grid item xs={12}>
                          <label htmlFor="">
                            Description <span className="imp">*</span>
                          </label>
                          <Field
                            as={TicketDetailsTextField} 
                            name="description"
                            variant="outlined"
                            multiline
                            rows={4}
                            style={{
                              width: "100%",
                              padding: "10px",
                              borderRadius: "4px",
                              boxSizing: "border-box",
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
                  </Grid>  */}
            </Grid>

            {/* <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    // onClick={handleSubmit}
                    sx={{
                      mt: 3,
                      backgroundColor: "#2e5c9e",
                      "&:hover": { backgroundColor: "#2e5c9ecc" },
                    }}
                  >
                    Submit Ticket
                  </Button>
                </Box> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PersonalDetails;
