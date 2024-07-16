import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Tabs, Tab } from "@mui/material";
import withResponsiveDrawer from "./withResponsiveDrawer";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import TicketHistory from "./TicketHistory";
import HistoryIcon from "@mui/icons-material/History";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
        height: "calc(100vh - 200px)",
        overflowY: "auto",
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ViewTicketDetails = () => {
  const getData = JSON.parse(localStorage.getItem("viewTickets"));
  const userContact = JSON.parse(sessionStorage.getItem("foundUser"));
  console.log("get Data -> ", getData);

  useEffect(() => {
    return () => {
      sessionStorage.setItem("canNavigate", "false");
    };
  }, []);

  const [value, setValue] = React.useState(0);
  const [isHeading, setIsHeading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (value === 0) {
      setIsHeading(false);
    }
    if (value === 1) {
      setIsHeading(true);
    }
  };

  const navigate = useNavigate();

  // Reusable style objects
  const sectionTitleStyle = {
    color: "#a2a2a2",
    fontSize: "15px",
    marginBottom: "10px",
  };

  const labelStyle = {
    fontSize: "12px",
    color: "#808080",
    marginBottom: "3px",
  };

  const valueStyle = {
    fontSize: "clamp(13px,2vw,14px)",
    color: "#474747",
    marginBottom: "20px",
  };

  const boxStyle = {
    bgcolor: "white",
    p: 2,
    // border: "1px solid #ccc",
    mb: 4,
  };

  const innerBoxStyle = {
    p: 2,
    bgcolor: "#f9f9f9",
    border: "0.1px solid #e9e9e9",
  };

  const nameStyle = {
    fontSize: "1rem",
    color: "#474747",
  };
  const personsPost = {
    fontSize: "12px",
    color: "#959494",
  };
  const dateStyle = {
    color: "#A1A1A1",
    fontSize: "11.2px",
    marginTop: "5px",
  };

  const msgStyle = {
    color: "#707070",
    fontSize: "14px",
  };

  const headingStyle = {
    backgroundColor: "#e4e4e4",
    borderRadius: "0.3rem",
    color: "#6c6c6c",
    fontSize: "clamp(.7rem,2vw,1rem)",
    width: "96%",
    textAlign: "center",
    padding: "0.8rem",
    fontWeight: "700",
    margin: "0 5px",
  };

  return (
    <Box
      spacing={2}
      // p={2}
      py={5}
      // sx={{ border: "1px solid red" }}
    >
      {/* Back Button */}
      <Button
        variant="contained"
        sx={{
          ml: 2,

          backgroundColor: "#2e5c9e",
          "&:hover": { backgroundColor: "#2e5c9ecc" },
        }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      {/* Header */}
      <Box
        // mb={4}
        px={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "100%", sm: "100%", md: "100%", lg: "93%" },
        }}
      >
        <Box sx={{ paddingRight: "10px" }}>
          <Typography
            variant="h5"
            sx={{ color: "#474747", fontSize: "clamp(14px,2vw,18px)" }}
          >
            Ticket ID: {getData.id} Status - {getData.status}
          </Typography>
          <Typography
            sx={{ color: "#808080", fontSize: "clamp(12px,2vw,12px)" }}
          >
            {getData.RequestedDate}
          </Typography>
        </Box>

        <TicketHistory />
      </Box>

      <Grid container spacing={2}>
        {/* Left Section - View Ticket */}
        <Grid
          item
          xs={12}
          md={12}
          lg={5}
          sx={{ marginRight: { xs: "0px", sm: "0px", lg: "20px" } }}
        >
          <Box sx={boxStyle}>
            <Typography variant="h6" gutterBottom>
              View Ticket
            </Typography>

            {/* Contact Details */}
            <Box sx={innerBoxStyle}>
              <Box>
                <Typography variant="h6" gutterBottom sx={sectionTitleStyle}>
                  Contact Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography sx={labelStyle}>Employee Name:</Typography>
                    <Typography sx={valueStyle}>
                      {userContact.username}
                    </Typography>
                    <Typography sx={labelStyle}>Email Id:</Typography>
                    <Typography sx={valueStyle}>{userContact.email}</Typography>
                    <Typography sx={labelStyle}>Location:</Typography>
                    <Typography sx={valueStyle}>{userContact.location}</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography sx={labelStyle}>Employee Code:</Typography>
                    <Typography
                      sx={{
                        fontSize: "clamp(13px,2vw,14px)",
                        color: "#474747",
                        marginBottom: "85px",
                      }}
                    >
                      {userContact.empolyeecode}
                    </Typography>
                    <Typography sx={labelStyle}>Contact No:</Typography>
                    <Typography sx={valueStyle}>{userContact.contact}</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography sx={labelStyle}>Designation:</Typography>
                    <Typography sx={valueStyle}>
                      {userContact.designation}
                    </Typography>
                    <Typography sx={labelStyle}>Department:</Typography>
                    <Typography sx={valueStyle}>
                      {userContact.department}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              {/* Ticket Details */}

              <hr
                style={{
                  marginBottom: "10px",
                  height: "1px",
                  backgroundColor: "#ccc",
                  border: "none",
                }}
              />
              <Box>
                <Typography variant="h6" gutterBottom sx={sectionTitleStyle}>
                  Ticket Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography sx={labelStyle}>Division:</Typography>
                    <Typography sx={valueStyle}>IT Systems</Typography>
                    <Typography sx={labelStyle}>Assigned to:</Typography>
                    <Typography sx={valueStyle}>Priyanka M</Typography>
                    <Typography sx={labelStyle}>
                      Executor Contact Number:
                    </Typography>
                    <Typography sx={valueStyle}>7204529828</Typography>
                    <Typography sx={labelStyle}>
                      Category by executor:
                    </Typography>
                    <Typography sx={valueStyle}>USB/Admin Access</Typography>
                    <Typography sx={labelStyle}>Class:</Typography>
                    <Typography sx={valueStyle}>Service</Typography>
                    <Typography sx={{ ...labelStyle, marginBottom: "10px" }}>
                      <input type="checkbox" defaultChecked /> Send reminder
                      email
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Typography sx={labelStyle}>Category:</Typography>
                    <Typography sx={valueStyle}>Access Review</Typography>
                    <Typography sx={labelStyle}>
                      Priority by Submitter:
                    </Typography>
                    <Typography
                      sx={{
                        ...valueStyle,
                        marginBottom: { xs: "20px", lg: "100px" },
                      }}
                    >
                      P2 - High
                    </Typography>
                    <Typography sx={labelStyle}>
                      Subcategory by executor:
                    </Typography>
                    <Typography sx={valueStyle}>
                      Renewal of Admin Rights
                    </Typography>
                    <Typography sx={labelStyle}>Duration Type:</Typography>
                    <Typography sx={valueStyle}>Temporary</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography sx={labelStyle}>Subcategory:</Typography>
                    <Typography sx={valueStyle}>Admin Rights</Typography>
                    <Typography sx={labelStyle}>
                      Priority by Executor:
                    </Typography>
                    <Typography
                      sx={{
                        ...valueStyle,
                        marginBottom: { xs: "25px", lg: "170px" },
                      }}
                    >
                      P3 - Medium
                    </Typography>
                    <Typography sx={labelStyle}>Duration Days:</Typography>
                    <Typography sx={valueStyle}>90</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography sx={labelStyle}>Subject:</Typography>
                  <Typography sx={valueStyle}>
                    Request for New Admin Access Password
                  </Typography>
                  <Typography sx={labelStyle}>Description:</Typography>
                  <Typography sx={valueStyle}>
                    Dear IT Helpdesk Team,
                  </Typography>
                  <Typography sx={valueStyle}>
                    I hope this email finds you well. I am writing to request
                    assistance with resetting my admin access password. The
                    previous password has expired, and I am unable to access the
                    necessary systems and tools required for my role.
                  </Typography>
                  <Typography sx={valueStyle}>
                    Could you kindly reset my admin access password and provide
                    me with the new credentials.
                  </Typography>
                  <Typography sx={valueStyle}>Best regards,</Typography>
                  <Typography sx={valueStyle}>Nihal Koli</Typography>
                  <Typography sx={labelStyle}>Attachment:</Typography>
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{ marginBottom: "20px" }}
                  >
                    Screenshot 2024-06-19 123240_131608_24504.png
                  </Typography>
                  <Typography sx={labelStyle}>Closing Remarks:</Typography>
                  <Typography sx={valueStyle}>
                    Admin reconciliation has been done. Hence closing the
                    ticket.
                  </Typography>
                  <Typography sx={labelStyle}>Closed Date:</Typography>
                  <Typography sx={valueStyle}>20-Jun-2024 04:03 PM</Typography>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Section - Tabs */}

        <Grid item xs={12} md={12} lg={6}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              ...boxStyle,
              height: "97.5%",
              paddingRight: { xs: 2, sm: 2, lg: "0px" },
              paddingLeft: { xs: 2, sm: 2, lg: "0px" },
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ border: "none", borderColor: "divider", height: "auto" }}
            >
              <Tab
                label="Conversation"
                {...a11yProps(0)}
                sx={{
                  fontSize: "12px",
                  letterSpacing: "0px",
                  borderBottom: "1px solid #ccc",
                  "&.Mui-selected": {
                    backgroundColor: "#2e5c9e",
                    color: "#fff",
                    transition: "0.3s all",
                    border: "none",
                  },
                }}
              />
              <Tab
                label="Approval Details"
                {...a11yProps(1)}
                sx={{
                  fontSize: "12px",
                  letterSpacing: "0px",
                  borderBottom: "1px solid #ccc",
                  "&.Mui-selected": {
                    backgroundColor: "#2e5c9e",
                    color: "#fff",
                    transition: "0.3s all",
                    border: "none",
                  },
                }}
              />
            </Tabs>
            <Box sx={{ width: "100%" }}>
              <Box sx={headingStyle}>
                {isHeading === true ? "Conversation" : "Approval Details"}
              </Box>

              <TabPanel value={value} index={0}>
                <Box
                  sx={{
                    height: "400px",
                    paddingBottom: "30px",
                    overflowY: "scroll",
                    "&::-webkit-scrollbar": {
                      width: "8px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#888",
                      border: "1px solid #f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#474747c7",
                    },
                  }}
                >
                  <Box mt={1} p={2}>
                    <Typography variant="body1" sx={nameStyle}>
                      Priyanka M{" "}
                      <Typography
                        variant="body2"
                        component="span"
                        sx={personsPost}
                      >
                        Executor
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={dateStyle}
                    >
                      20-Jun-2024 04:03 PM
                    </Typography>
                    <Typography mt={1} sx={msgStyle}>
                      admin reconciliation has been done.
                    </Typography>
                    <Typography
                      pt={2}
                      sx={{ borderBottom: "2px dashed #f1c40f" }}
                    ></Typography>
                  </Box>
                  <Box p={2}>
                    <Typography variant="body1" sx={nameStyle}>
                      Nihal Koli Manesh{" "}
                      <Typography
                        variant="body2"
                        component="span"
                        sx={personsPost}
                      >
                        Submitter
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={dateStyle}
                    >
                      19-Jun-2024 12:32 PM
                    </Typography>
                    <Typography mt={1} sx={msgStyle}>
                      Hi Priyanka, My manager approved it. Please take a look.
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Attachment: Screenshot 2024-06-19 123240_131608_24504.png
                    </Typography>
                    <Typography
                      pt={2}
                      sx={{ borderBottom: "2px dashed #f1c40f" }}
                    ></Typography>
                  </Box>
                  <Box p={2}>
                    <Typography variant="body1" sx={nameStyle}>
                      Priyanka M
                      <Typography
                        variant="body2"
                        component="span"
                        sx={personsPost}
                      >
                        {" "}
                        Executor
                      </Typography>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={dateStyle}
                    >
                      19-Jun-2024 10:25 AM
                    </Typography>
                    <Typography sx={msgStyle}>
                      Hi Nihal, Your admin access renewal request has been
                      received. Can you please provide additional details and
                      approvals from your manager for processing?
                    </Typography>
                    <Typography
                      pt={2}
                      sx={{ borderBottom: "2px dashed #f1c40f" }}
                    ></Typography>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box
                  mt={1}
                  p={1}
                  sx={{
                    height: "400px",
                    paddingBottom: "30px",
                    overflowY: "scroll",
                    "&::-webkit-scrollbar": {
                      width: "8px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#888",
                      border: "1px solid #f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#474747c7",
                    },
                  }}
                >
                  <Typography
                    paragraph
                    sx={{ borderBottom: "2px dashed #f1c40f" }}
                  >
                    <Typography sx={labelStyle}>Executor Names</Typography>
                    <Typography sx={valueStyle}>Priyanka M</Typography>
                    <Typography sx={labelStyle}>Executor Remarks</Typography>
                    <Typography sx={valueStyle}>
                      The above user is contract employee, He need admin access
                      to run the comment prompt in run as administrator mode. I
                      kindly request you to approve the same.
                    </Typography>
                    <Typography sx={labelStyle}>
                      Sent for approval on
                    </Typography>
                    <Typography sx={valueStyle}>
                      19-Jun-2024 12:38 PM
                    </Typography>
                    <Typography sx={labelStyle}>Approver Name</Typography>
                    <Typography sx={valueStyle}>Srinivas Chudamani</Typography>
                    <Typography sx={labelStyle}>Approver Remarks</Typography>
                    <Typography sx={valueStyle}>Approved</Typography>
                    <Typography sx={labelStyle}>Status</Typography>
                    <Typography
                      sx={{
                        color: "#198754",
                        fontSize: "14px",
                        marginBottom: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Approved
                    </Typography>
                    <Typography sx={labelStyle}>
                      Approved/Rejected/Revoked Date
                    </Typography>
                    <Typography sx={valueStyle}>
                      20-Jun-2024 03:47 PM
                    </Typography>
                  </Typography>
                  <Typography
                    paragraph
                    sx={{ borderBottom: "2px dashed #f1c40f" }}
                  >
                    <Typography sx={labelStyle}>Executor Names</Typography>
                    <Typography sx={valueStyle}>Priyanka M</Typography>
                    <Typography sx={labelStyle}>Executor Remarks</Typography>
                    <Typography sx={valueStyle}>
                      The above user is contract employee, He need admin access
                      to run the comment prompt in run as administrator mode. I
                      kindly request you to approve the same.
                    </Typography>
                    <Typography sx={labelStyle}>
                      Sent for approval on
                    </Typography>
                    <Typography sx={valueStyle}>
                      19-Jun-2024 10:46 AM
                    </Typography>
                    <Typography sx={labelStyle}>Approver Name</Typography>
                    <Typography sx={valueStyle}>Ravikumar G H</Typography>
                    <Typography sx={labelStyle}>Approver Remarks</Typography>
                    <Typography sx={valueStyle}>Approved</Typography>
                    <Typography sx={labelStyle}>Status</Typography>
                    <Typography
                      sx={{
                        color: "#198754",
                        fontSize: "14px",
                        marginBottom: "10px",
                        fontWeight: "600",
                      }}
                    >
                      Approved
                    </Typography>
                    <Typography sx={labelStyle}>
                      Approved/Rejected/Revoked Date
                    </Typography>
                    <Typography sx={valueStyle}>
                      19-Jun-2024 12:17 PM
                    </Typography>
                  </Typography>
                </Box>
              </TabPanel>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withResponsiveDrawer(ViewTicketDetails);
