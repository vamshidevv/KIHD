// DashboardCards.js
import React from "react";
import withResponsiveDrawer from "./withResponsiveDrawer";
import { Box, Card, CardContent, Typography } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const DashboardCards = () => {
  return (
    <>
      <h2 className="dashboard-txt">Dashboard</h2>
      <Box className="dashboard">
        <Card className="dashboard-card">
          <CardContent className="card-content">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PostAddIcon id="post-icon" sx={{ paddingBottom: "10px" }} />
            </div>
            <Typography
              variant="h6"
              sx={{
                color: "#8D8D8D",
                fontSize: "1rem",
              }}
            >
              Submit Ticket
            </Typography>
          </CardContent>
        </Card>
        <Card className="dashboard-card">
          <CardContent className="card-content">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <ConfirmationNumberIcon
                id="confirm-icon"
                sx={{ height: "2.2rem", width: "1.8rem" }}
              />
              <Typography
                variant="h4"
                className="ticket-count"
                sx={{
                  color: "#474747",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                9
              </Typography>
            </div>

            <Typography
              variant="h6"
              sx={{
                color: "#8D8D8D",
                fontSize: "1rem",
              }}
            >
              My Tickets
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default withResponsiveDrawer(DashboardCards);
