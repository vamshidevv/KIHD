import { Box, Typography, ThemeProvider, createTheme } from "@mui/material";

import withResponsiveDrawer from "./withResponsiveDrawer";

import TicketDetails from "./TicketDetails";
import PersonalDetails from "./PersonalDetails";

// Define Yup validation schema

const SubmitTicket = () => {
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
          <PersonalDetails />
        </Box>
        <TicketDetails />
      </Box>
    </ThemeProvider>
  );
};

export default withResponsiveDrawer(SubmitTicket);
