import React, { useEffect, useState } from "react";
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
import * as Yup from "yup";
import withResponsiveDrawer from "./withResponsiveDrawer";
import { styled } from "@mui/system";
import InfoIcon from "@mui/icons-material/Info";

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
  const [user, setUser] = useState({});
  console.log("userState", user);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const typeOptions = [
    "Administration Department",
    "DevOps/Release Engineering",
    "Human Resource",
    "IT Systems",
  ];
  const categoryOptions = {
    "Administration Department": [
      "Access Control",
      "Canteen",
      "Guest House Request",
      "HouseKeeping",
      "IT Spares",
      "Maintenance",
      "Onboarding/Offboarding",
      "PF",
      "Stationary",
      "System Movement",
      "Transport",
      "Visitors Management",
    ],

    "DevOps/Release Engineering": [
      "Application and DB Deployment",
      "Application Deployment",
      "DB Deployment",
      "Git",
      "Infra",
      "Jenkins",
      "Site24×7",
      "SonarQube",
      "Support/Maintanance",
      "TFS",
    ],

    "Human Resource": [
      "ID Card",
      "Insurance",
      "Letter Request",
      "Others",
      "Recruitment",
      "Salary",
      "Zoho",
    ],

    "IT Systems": [
      "Access Review",
      "AD Account",
      "Antivirus",
      "Backup/Restore",
      "Change Management",
      "DNS",
      "Email",
      "Google/Zoho Drive",
      "Hardware",
      "Internet",
      "Joinee/Exit Process",
      "Log Review",
      "Network",
      "SFTP/https",
      "Software",
      "SVN",
      "USB/Admin Access",
      "Virtual Machines",
      "VPN",
    ],
  };
  const subcategoryOptions = {
    // Administration department starts from here

    "Access Control": ["Biometric"],
    "Canteen": ["Cleanliness", "Feedback"],
    "Guest House Request": ["Guest House Request"],
    "HouseKeeping": ["Rest rooms, Workplace Cleaning"],
    "IT Spares": [
      "Desktop",
      "Desktop Monitor",
      "Dongle",
      "HDD",
      "KeyBoard",
      "Laptop",
      "Mouse",
      "Network Patch cable",
      "Others",
      "RAM",
      "SSD",
    ],
    "Maintenance": [
      "Chair",
      "Lift",
      "Light,Fan/AC not working",
      "Others",
      "Power Problem",
      "Telephone issues",
      "Water dispenser",
      "Water leakage/seepage",
      "Windows not working",
    ],
    "Onboarding/Offboarding": ["Onboarding/Offboarding"],
    "PF": ["Transfer", "Withdrawal"],
    "Stationary": ["Marker,Duster", "Pen Notepad"],
    "System Movement": ["System Movement"],
    "Transport": ["Transport"],
    "Visitors Management": ["Security", "Vehicles Parking", "Visitors"],

    //  Administration ends here

    // DevOps starts from here.

    "Application and DB Deployment": [
      "DB patch update - Internal ",
      "DB patch update - Preprod",
      "DB patch update - Production",
      "DB patch update - Staging",
      "DB patch update - UAT",
      "Full DB  update - Internal",
      "Full DB  update - Preprod",
      "Full DB  update - Production",
      "Full DB  update - Staging",
      "Full DB  update - UAT",
      "Full Deployment - Internal",
      "Full Deployment - Preprod",
      "Full Deployment - Production",
      "Full Deployment - Staging",
      "Full Deployment - UAT",
      "New Environment Setup",
      "Others",
      "Patch Deployment - Internal",
      "Patch Deployment - Preprod",
      "Patch Deployment - Production",
      "Patch Deployment - Staging",
      "Patch Deployment - UAT",
      "Server Turn off",
      "Server Turn on",
    ],
    "Application Deployment": [
      "Full Deployment - Preprod",
      "Full Deployment - Production",
      "Full Deployment - Staging",
      "Full Deployment - UAT",
      "New Environment Setup",
      "Others",
      "Patch Deployment - Internal",
      "Patch Deployment - Preprod",
      "Patch Deployment - Production",
      "Patch Deployment - Staging",
      "Patch Deployment - UAT",
      "Server Turn off",
      "Server Turn on",
    ],

    "DB Deployment": [
      "DB patch update - Internal ",
      "DB patch update - Preprod",
      "DB patch update - Production",
      "DB patch update - Staging",
      "DB patch update - UAT",
      "Full DB  update - Internal",
      "Full DB  update - Preprod",
      "Full DB  update - Production",
      "Full DB  update - Staging",
      "Full DB  update - UAT",
      "New Environment Setup",
      "Others",
      "Server Turn off",
      "Server Turn on",
    ],

    "Git": [
      "Access for new user",
      "Access Removal",
      "Creating/deleting new repo",
      "New Branch Creation",
      "Others",
      "Support",
    ],

    "Infra": [
      "Additional Storage Request",
      "ASG (Auto Scaling Group)",
      "Billing and Cost Management",
      "New Server Creation request",
      "Others",
      "Raise AWS/Azure ticket",
      "Server Downgrade Request",
      "Server Image backup",
      "Server Migration Request",
      "Server turn off",
      "Server turn on",
      "Server Upgrade Request",
    ],

    "Jenkins": ["job Execution", "New Jenkins job Creation", "Others"],
    "Site24×7": [
      "Add monitor",
      "Alert Configuration",
      "Clone monitor",
      "Delete monitor",
      "Log configuration",
      "Report preparation",
    ],

    "SonarQube": ["Job Execution", "New SonarQube job Creation", "Others"],
    "Support/Maintanance": [
      "Antivirus",
      "Applicaion backup request",
      "Application Support",
      "AppPoll Recycle",
      "Certficate Installation",
      "DB Access request",
      "DB backup request",
      "Db support",
      "Developer support",
      "Documentation",
      "Issue Investigation",
      "Logs Fetch",
      "Others",
      "Security best practices",
      "Security patch update",
      "Server Access Request",
      "Space Clean up /additional space request",
      "Vulnerabilities Fix",
      "Weak Ciphers Disable",
    ],

    "TFS": [
      "Access for new user",
      "Access Reconciliation",
      "Access Removal",
      "File Unlock Request",
      "Merge Request",
      "New Branch Creation",
      "New Project Creation",
      "Others",
      "Work Item Customization(Bugs/Task/Story.etc)",
    ],

    // DevOps Ends  here

    // Human Resource starts here
    "ID Card": ["Permanent ID card request"],
    "Insurence": [
      "ESI Card changes",
      "ESI card requirement",
      "GHIS Renewal/Claim",
    ],
    "Letter Request": [
      "Address Proof Letter",
      "Designation Letter",
      "Visa Covering Letter",
    ],
    "Others": ["General Queries"],
    "Recruitment": ["Current Openings", "Employee Referal"],
    "Salary": ["Pay roll deductions/Distribution of pay roll"],
    // Human Resource ends here

    // IT System starts here
    "Access Review": [
      "Admin Rights",
      "Firewall and VPN Box Privilage Access",
      "Firewall Rules",
      "HTTPS Accounts",
      "Others",
      "SFTP Accounts",
      "SVN Access",
      "USB Access",
      "VPN Accounts",
      "Zoho Remote Tool",
    ],
    "AD Account": [
      "Change/Modify account",
      "Change/Modify Group Policy",
      "Create Account for customer",
      "create new privilage account",
      "create new AD account",
      "Customer account password reset",
      "Delete/Disable Account",
      "New Group Policy",
      "Others",
      "Password Reset",
      "set account expiry date",
    ],
    "AnitiVirus": [
      "allow/file/applicaitons",
      "av defination update",
      "av install/reinstall",
      "creating new policy",
    ],
    "Backup/Restore": [
      "GIT/backup restore",
      "jenkins/backup restore",
      "SVN/backup restore",
      "TFS/backup restore",
      "Timesheet/backup restore",
    ],
    "Change Management": [
      "Emergency change",
      "Normal change",
      "Standard change",
    ],

    "DNS": ["Delete DNS Record", "Modify DNS Record", "New DNS Record", "Others"],
    "Email": [
      "Change/modify DL membership",
      "Configure mailbox",
      "create new DL",
      "create new email id",
      "delete email id/Dl",
      "email not delivered",
      "not able to send/recieve mail",
      "not recieve the mail from customer",
      "others",
      "outlook not connecting",
      "password reset",
      "release quarantined email",
      "whitelisting email ID/domain",
    ],
    "Google/Zoho Drive": [
      "downgrade license",
      "others",
      "recover deleted file",
      "request storage access",
    ],
    "Hardware": [
      "Audio isuue",
      "change for desktop request",
      "change for laptop request",
      "change/upgrade hardware",
      "Desktop allocation",
      "HDD/SSD issue",
      "keyboard/mouse issue",
      "laptop allocation",
      "monitor display issue",
      "motherboard issue",
      "others",
      "RAM issue",
      "SMPS/power issue",
    ],

    "Internet": [
      "enable ES hosted site from public network",
      "internet speed issue",
      "others",
      "special internet access",
      "unable to access internet site",
      "unable to download customer input",
      "whitelisting URL/path",
    ],
    "Joinee/Exit Process": [
      "domain and email id creation",
      "domain and email id deletion",
      "new joiners system allocation",
      "others",
    ],
    "Log Review": ["forewall logs", "server logs", "VPN logs"],
    "Network": [
      "enable MAC id",
      "ip address not getting",
      "LAN/Wifi not connected",
      "others",
      "Required LAN/Wifi",
    ],
    "SFTP/https": [
      "create new SFTP/https account creation",
      "others",
      "renew",
      "SFTP/https account",
      "SFTP https account passoword reset",
    ],

    "Software": [
      "Drivers Installation",
      "Freeware Installation",
      "License renewal",
      "New License/Service",
      "O365/M365 Installation",
      "OS Upgradation",
      "Others",
      "Software Installation",
      "Software Upgradation",
      "SQL Server Insatallation",
      "System Booting Issue",
      "Visual Studio Installation",
    ],

    "SVN": [
      "Login Issue",
      "New account request",
      "Others",
      "SVN Backup/Restore",
      "SVN URL not accessible",
    ],
    "USB/Admin Access": [
      "Admin Rights Request",
      "Renewal of Admin Rights",
      "Renewal of USB Access",
      "USB Access Request",
    ],
    "Virtual Machines": [
      "Cloud VM Backup",
      "Create Cloud VM",
      "Create Local VM",
      "Delete VM",
      "Enable Network and Ports",
      "Others",
      "Resizing of VM",
    ],
    "VPN": [
      "Create New VPN Account",
      "Enable Customer VPN Access",
      "Others",
      "Renew Customer VPN Access",
      "Renew VPN Account",
      "VPN Connectivity Issue",
    ],

    // IT System ends here
  };

  useEffect(() => {
    const getUser = localStorage.getItem("foundUser");
    setUser(JSON.parse(getUser));
  }, []);

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
        p={2}
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
                              setSelectedType(event.target.value);
                              setSelectedCategory("");
                              setSelectedSubcategory("");
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
                              setSelectedCategory(event.target.value);
                              setSelectedSubcategory("");
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
