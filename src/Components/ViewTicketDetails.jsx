import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import withResponsiveDrawer from "./withResponsiveDrawer";
import { useNavigate } from "react-router-dom";

const ViewTicketDetails = () => {
  const navigate = useNavigate();
  return (
    <Box>
      {/* Back Button */}
      <Button
        variant="contained"
        sx={{
          mb: 2,
          backgroundColor: "#2e5c9e",
          "&:hover": { backgroundColor: "#2e5c9ecc" },
        }}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      {/* Header */}
      <Box mb={4}>
        <Typography
          variant="h5"
          sx={{ color: "#474747", fontSize: "clamp(15px,2vw,20px)" }}
        >
          Ticket ID: 131608 Status - Closed
        </Typography>
        <Typography sx={{ color: "#808080", fontSize: "clamp(15px,2vw,px)" }}>
          Requested Date: 19-Jun-2024 09:59 AM
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Left Section - View Ticket */}
        <Grid item xs={12} md={12} lg={6}>
          <Box bgcolor="white" p={2} boxShadow={1} border="1px solid #ccc">
            <Typography variant="h6" gutterBottom>
              View Ticket
            </Typography>

            {/* Contact Details */}
            <Box p={2} bgcolor="#f9f9f9" borderBottom="1px solid #ccc">
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#a2a2a2", fontSize: "15px" }}
              >
                Contact Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Employee Name:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "3px",
                    }}
                  >
                    Nihal Koli Manesh{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Email Id:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "3px",
                    }}
                  >
                    nihal.koli@excelindia.com
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Location:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "3px",
                    }}
                  >
                    MYSORE{" "}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Employee Code:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: { xs: "15px", lg: "70px" },
                    }}
                  >
                    0009000021{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Contact No:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "3px",
                    }}
                  >
                    9106330420
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Designation:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: { xs: "15px", lg: "50px" },
                    }}
                  >
                    Senior Software Engineer
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Department:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "30px",
                    }}
                  >
                    Dept: Pearson Learning Services
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            {/* Ticket Details */}
            <Box p={2} bgcolor="#f9f9f9" borderRadius={2}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#a2a2a2", fontSize: "15px" }}
              >
                Ticket Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Division:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "30px",
                    }}
                  >
                    IT Systems
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Assigned to:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "30px",
                    }}
                  >
                    Priyanka M
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Executor Contact Number:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "30px",
                    }}
                  >
                    7204529828
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Category by executor:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "30px",
                    }}
                  >
                    USB/Admin Access
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Class:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "30px",
                    }}
                  >
                    Service
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "10px",
                    }}
                  >
                    {" "}
                    <input type="checkbox" checked /> Send reminder email
                  </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Category:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "30px",
                    }}
                  >
                    Access Review{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Priority by Submitter:{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: { xs: "20px", lg: "100px" },
                    }}
                  >
                    P2 - High
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Subcategory by executor:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "30px",
                    }}
                  >
                    Renewal of Admin Rights
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Duration Type:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "30px",
                    }}
                  >
                    Temporary
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Subcategory
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: "30px",
                    }}
                  >
                    Admin Rights
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    Priority by Executor:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "clamp(13px,2vw,14px)",
                      color: "#474747",
                      marginBottom: { xs: "25px", lg: "170px" },
                    }}
                  >
                    P3 - Medium
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "3px",
                    }}
                  >
                    {" "}
                    Duration Days:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#808080",
                      marginBottom: "30px",
                    }}
                  >
                    90
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#808080",
                    marginBottom: "3px",
                  }}
                >
                  Subject
                </Typography>
                <Typography
                  sx={{
                    fontSize: "clamp(13px,2vw,14px)",
                    color: "#474747",
                    marginBottom: "20px",
                  }}
                >
                  Request for New Admin Access Password
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#808080",
                    marginBottom: "3px",
                  }}
                >
                  Description
                </Typography>
                <Typography
                  sx={{
                    fontSize: "clamp(13px,2vw,14px)",
                    color: "#474747",
                    marginBottom: "20px",
                  }}
                >
                  Dear IT Helpdesk Team,
                </Typography>
                <Typography
                  sx={{
                    fontSize: "clamp(13px,2vw,14px)",
                    color: "#474747",
                    marginBottom: "20px",
                  }}
                >
                  I hope this email finds you well. I am writing to request
                  assistance with resetting my admin access password. The
                  previous password has expired, and I am unable to access the
                  necessary systems and tools required for my role.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "clamp(13px,2vw,14px)",
                    color: "#474747",
                    marginBottom: "20px",
                  }}
                >
                  {" "}
                  Could you kindly reset my admin access password and provide me
                  with the new credentials.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "clamp(13px,2vw,14px)",
                    color: "#474747",
                    marginBottom: "3px",
                  }}
                >
                  Best regards,
                </Typography>
                <Typography
                  sx={{
                    fontSize: "clamp(13px,2vw,14px)",
                    color: "#474747",
                    marginBottom: "20px",
                  }}
                >
                  Nihal Koli
                </Typography>

                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#808080",
                    marginBottom: "3px",
                  }}
                >
                  Attachment
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{
                    marginBottom: "20px",
                  }}
                >
                  Screenshot 2024-06-19 123240_131608_24504.png
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#808080",
                    marginBottom: "3px",
                  }}
                >
                  Closing Remarks:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "clamp(13px,2vw,14px)",
                    color: "#474747",
                    marginBottom: "20px",
                  }}
                >
                  admin reconciliation has been done. Hence closing the ticket.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#808080",
                    marginBottom: "3px",
                  }}
                >
                  Closed Date:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "clamp(13px,2vw,14px)",
                    color: "#474747",
                    marginBottom: "20px",
                  }}
                >
                  20-Jun-2024 04:03 PM
                </Typography>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Right Section - Conversation */}

        <Grid item xs={12} md={12} lg={6}>
          <Box
            bgcolor="white"
            p={2}
            borderRadius={2}
            boxShadow={1}
            border="1px solid #ccc"
          >
            <Typography variant="h6" gutterBottom>
              Conversation
            </Typography>
            <Box
              mt={2}
              p={2}
              //   bgcolor="#f9f9f9"
              borderBottom="2px dashed #f1c40f"
              //   borderRadius={2}
            >
              <Typography variant="body1">
                <strong>Priyanka M Executor</strong>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                20-Jun-2024 04:03 PM
              </Typography>
              <Typography mt={1}>
                Admin reconciliation has been done.
              </Typography>
            </Box>
            <Box
              mt={2}
              p={2}
              //   bgcolor="#f9f9f9"
              borderBottom="2px dashed #f1c40f"
              //   borderRadius={2}
            >
              <Typography variant="body1">
                <strong>Nihal Koli Manesh Submitter</strong>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                19-Jun-2024 12:32 PM
              </Typography>
              <Typography mt={1}>
                Hi Priyanka, My manager approved it. Please take a look.
              </Typography>
              <Typography variant="body2" color="primary">
                Attachment: Screenshot 2024-06-19 123240_131608_24504.png
              </Typography>
            </Box>
            <Box
              mt={2}
              p={2}
              //   bgcolor="#f9f9f9"
              borderBottom="2px dashed #f1c40f"
              //   borderRadius={2}
            >
              <Typography variant="body1">
                <strong>Priyanka M Executor</strong>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                19-Jun-2024 10:47 AM
              </Typography>
              <Typography mt={1}>
                Hello Nihal, Kindly ask your manager to approve the ticket in
                helpdesk portal.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default withResponsiveDrawer(ViewTicketDetails);
