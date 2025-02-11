import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import InfoIcon from "@mui/icons-material/Info";
import { styled } from "@mui/system";
import {
  Box,
  TextField,
  //   Button,
  Grid,
  Typography,
  MenuItem,
  Tooltip,
  //   ThemeProvider,
  //   createTheme,
  Alert,
  Button,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validationSchema } from "./validationSchema";

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

const TicketDetails = () => {
  const [initialValues, setInitialValues] = useState({
    type: "",
    projectTitle: "",
    category: "",
    subcategory: "",
    subject: "",
    description: "",
    priority: "",
    attachment: "",
    sendemail: "",
  });

  const [isProjectTitle, setIsProjectTitle] = useState(false);
  const [selectData, setIsSelect] = useState([]);
  const [isDevOps, setIsDevOps] = useState(false);
  const [showProjectTitleError, setShowProjectTitleError] = useState(false);
  const [projectTitleTouched, setProjectTitleTouched] = useState(false);
  const [ticketCloned, setTicketCloned] = useState(false);

  const [user, setUser] = useState({});
  const [isCategory, setIsCategory] = useState(true);
  const [isSubCategory, setIsSubCategory] = useState(true);
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const typeOptions = [
    "Administration Department",
    "DevOps/Release Engineering",
    "Human Resource",
    "IT Systems",
  ];

  const projectOptions = [
    "Pearson_LS_Common_FY 2024-25",
    "Pearson_LMS MLM_2024",
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
    Canteen: ["Cleanliness", "Feedback"],
    "Guest House Request": ["Guest House Request"],
    HouseKeeping: ["Rest rooms, Workplace Cleaning"],
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
    Maintenance: [
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
    PF: ["Transfer", "Withdrawal"],
    Stationary: ["Marker,Duster", "Pen Notepad"],
    "System Movement": ["System Movement"],
    Transport: ["Transport"],
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

    Git: [
      "Access for new user",
      "Access Removal",
      "Creating/deleting new repo",
      "New Branch Creation",
      "Others",
      "Support",
    ],

    Infra: [
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

    Jenkins: ["job Execution", "New Jenkins job Creation", "Others"],
    "Site24×7": [
      "Add monitor",
      "Alert Configuration",
      "Clone monitor",
      "Delete monitor",
      "Log configuration",
      "Report preparation",
    ],

    SonarQube: ["Job Execution", "New SonarQube job Creation", "Others"],
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

    TFS: [
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
    Insurance: [
      "ESI Card changes",
      "ESI card requirement",
      "GHIS Renewal/Claim",
    ],
    "Letter Request": [
      "Address Proof Letter",
      "Designation Letter",
      "Visa Covering Letter",
    ],
    Others: ["General Queries"],
    Recruitment: ["Current Openings", "Employee Referal"],
    Salary: ["Pay roll deductions/Distribution of pay roll"],
    Zoho: [
      "Compensatory off",
      "Leave carry forward/Calculation",
      "Leave policy(Marital/Maternity)",
      "Performance Appraisal",
      "Phone Number/E Mail ID/Address/Marital Status",
      "Regularisation",
      "Reporting Department",
    ],
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
    Antivirus: [
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

    DNS: ["Delete DNS Record", "Modify DNS Record", "New DNS Record", "Others"],
    Email: [
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
    Hardware: [
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

    Internet: [
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
    Network: [
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

    Software: [
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

    SVN: [
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
    VPN: [
      "Create New VPN Account",
      "Enable Customer VPN Access",
      "Others",
      "Renew Customer VPN Access",
      "Renew VPN Account",
      "VPN Connectivity Issue",
    ],

    // IT System ends here
  };
  const clonedTicket = JSON.parse(sessionStorage.getItem("clonedTickets"));

  useEffect((event) => {
    const getUser = localStorage.getItem("foundUser");
    setUser(JSON.parse(getUser));
    if (clonedTicket) {
      setInitialValues(clonedTicket);
      setTicketCloned(true);
      setIsCategory(false);

      console.log("cloned Ticket", clonedTicket);
      console.log("intialValues", initialValues);
    } else {
      setInitialValues(initialValues);
    }
  }, []);

  const [fileSizeError, setFileSizeError] = useState(false);

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);

    // Custom validation for projectTitle

    const formatDateTime = (date) => {
      const options = {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    };

    // Get current date and time
    const RequestedDate = formatDateTime(new Date());

    const status = Math.random() < 0.5 ? "closed" : "open";

    const formData = {
      ...values,
      RequestedDate,
      status,
    };

    console.log("Form data", formData);

    axios
      .post("http://localhost:3000/ticketdetails", formData)
      .then((response) => {
        console.log("Response:", response);
        toast.success("Ticket submitted successfully", {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        resetForm();
        setShowProjectTitleError(false);
      })
      .catch((error) => {
        console.error("Error submitting ticket:", error);
        toast.error("Failed to submit ticket", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleChange,
          setFieldValue,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <Form onSubmit={handleSubmit}>
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
                      value={
                        ticketCloned === true ? clonedTicket.type : values.type
                      }
                      variant="outlined"
                      onChange={(event) => {
                        setSelectedType(event.target.value);
                        setSelectedCategory("");
                        setSelectedSubcategory("");
                        setFieldValue("type", event.target.value);
                        setIsCategory(false);
                        if (
                          event.target.value === "DevOps/Release Engineering"
                        ) {
                          setIsProjectTitle(true);
                        } else {
                          setIsProjectTitle(false);
                          setFieldValue("projectTitle", "");
                          setShowProjectTitleError(false);
                        }
                      }}
                      SelectProps={{
                        displayEmpty: true,
                        renderValue: (value) =>
                          value === "" ? "--Select--" : value,
                      }}
                      className={`custom-textfield ${
                        touched.type && errors.type
                          ? "touched-error"
                          : touched.type && !errors.type
                          ? "touched-success"
                          : ""
                      } ${
                        touched.type && errors.type
                          ? "focused-error"
                          : touched.type && !errors.type
                          ? "focused-success"
                          : ""
                      }`}
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
                      visibility: !isProjectTitle ? "hidden" : "visible",
                      display: {
                        xs: isProjectTitle ? "block" : "none",
                        md: "block",
                      },
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
                      value={values.projectTitle}
                      onChange={(event) => {
                        setFieldValue("projectTitle", event.target.value);
                        setShowProjectTitleError(false);
                      }}
                      SelectProps={{
                        displayEmpty: true,
                        renderValue: (value) =>
                          value === "" ? "--Select--" : value,
                      }}
                      className={`custom-textfield ${
                        touched.projectTitle && errors.projectTitle
                          ? "touched-error"
                          : touched.projectTitle && !errors.projectTitle
                          ? "touched-success"
                          : ""
                      } ${
                        touched.projectTitle && errors.projectTitle
                          ? "focused-error"
                          : touched.projectTitle && !errors.projectTitle
                          ? "focused-success"
                          : ""
                      }`}
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
                      // value={ticketCloned === true ? clonedTicket.category : ""}
                      value={values.category}
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
                      className={`custom-textfield ${
                        touched.category && errors.category
                          ? "touched-error"
                          : touched.category && !errors.category
                          ? "touched-success"
                          : ""
                      } ${
                        touched.category && errors.category
                          ? "focused-error"
                          : touched.category && !errors.category
                          ? "focused-success"
                          : ""
                      }`}
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
                      value={values.subcategory}
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
                      className={`custom-textfield ${
                        touched.subcategory && errors.subcategory
                          ? "touched-error"
                          : touched.subcategory && !errors.subcategory
                          ? "touched-success"
                          : ""
                      } ${
                        touched.subcategory && errors.subcategory
                          ? "focused-error"
                          : touched.subcategory && !errors.subcategory
                          ? "focused-success"
                          : ""
                      }`}
                    >
                      {selectedCategory &&
                        subcategoryOptions[selectedCategory].map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
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
                      value={
                        ticketCloned === true
                          ? clonedTicket.subject
                          : values.subject
                      }
                      placeholder="Type here..."
                      onChange={handleChange}
                      className={`custom-textfield ${
                        touched.subject && errors.subject
                          ? "touched-error"
                          : touched.subject && !errors.subject
                          ? "touched-success"
                          : ""
                      } ${
                        touched.subject && errors.subject
                          ? "focused-error"
                          : touched.subject && !errors.subject
                          ? "focused-success"
                          : ""
                      }`}
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
                      value={
                        ticketCloned === true
                          ? clonedTicket.description
                          : values.description
                      }
                      style={{
                        width: "100%",
                        padding: "1px",
                        borderRadius: "4px",
                        boxSizing: "border-box",
                        borderColor: "#e3e3e3",
                      }}
                      onChange={handleChange}
                      className={`custom-textfield ${
                        touched.description && errors.description
                          ? "touched-error"
                          : touched.description && !errors.description
                          ? "touched-success"
                          : ""
                      } ${
                        touched.description && errors.description
                          ? "focused-error"
                          : touched.description && !errors.description
                          ? "focused-success"
                          : ""
                      }`}
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
                      value={
                        ticketCloned === true
                          ? clonedTicket.priority
                          : values.priority
                      }
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
                      className={`custom-textfield ${
                        touched.priority && errors.priority
                          ? "touched-error"
                          : touched.priority && !errors.priority
                          ? "touched-success"
                          : ""
                      } ${
                        touched.priority && errors.priority
                          ? "focused-error"
                          : touched.priority && !errors.priority
                          ? "focused-success"
                          : ""
                      }`}
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
                      name="file"
                      value={values.file}
                      style={{ display: "none" }}
                      onChange={(event) => {
                        const file = event.target.files[0];
                        if (file.size > 5 * 1024 * 1024) {
                          setFileSizeError(true);
                          setFieldValue("attachment", "");
                        } else {
                          setFileSizeError(false);
                          setFieldValue("attachment", file ? file.name : "");
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
                    {fileSizeError && (
                      <Alert severity="error">
                        Maximum file size allowed is 5MB.
                      </Alert>
                    )}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={5}
                    sx={{
                      visibility: !isProjectTitle ? "hidden" : "visible",
                      display: {
                        xs: isProjectTitle ? "block" : "none",
                        // md: "block",
                      },
                    }}
                  >
                    <label htmlFor="">Send email copy to</label>

                    <Box sx={{ position: "relative" }}>
                      <Field
                        as={TicketDetailsTextField}
                        fullWidth
                        name="sendemail"
                        value={values.sendemail}
                        variant="outlined"
                        placeholder="Use semicolon for multiple email ID's"
                        className={`custom-textfield ${
                          touched.sendemail && errors.sendemail
                            ? "touched-error"
                            : touched.sendemail && !errors.sendemail
                            ? "touched-success"
                            : ""
                        } ${
                          touched.sendemail && errors.sendemail
                            ? "focused-error"
                            : touched.sendemail && !errors.sendemail
                            ? "focused-success"
                            : ""
                        }`}
                      />
                      {touched.sendemail && errors.sendemail && (
                        <Typography variant="caption" color="error">
                          {errors.sendemail}
                        </Typography>
                      )}
                      <Tooltip
                        title={
                          <>
                            - use only koli infotech domain email id's
                            <br />- use semiclon(;) for mulitiple email id's
                            <br />- email notification will be sent to the email
                            ID's entered here when :
                            <br />{" "}
                            <ul style={{ listStyle: "none" }}>
                              <li> - The ticket is submitted</li>
                              <li>- The ticket is closed</li>
                            </ul>
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
                    {touched.sendemail && errors.sendemail && (
                      <Typography variant="caption" color="error">
                        {errors.sendemail}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
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
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TicketDetails;
