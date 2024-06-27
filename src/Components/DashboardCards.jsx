// DashboardCards.js
import React from "react";
import withResponsiveDrawer from "./withResponsiveDrawer";
import { Box, Card, CardContent, Typography } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { useNavigate } from "react-router-dom";

const DashboardCards = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="dashboard-txt">Dashboard</h2>
      <Box className="dashboard">
        <div
          className="dashboard-card"
          onClick={() => {
            navigate("/submitticket");
          }}
        >
          <CardContent className="card-content">
            <div
              id="submit-ticket-txt"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <PostAddIcon id="post-icon" sx={{ paddingBottom: "10px" }} />

              <Typography
                variant="h4"
                className="ticket-count"
                sx={{
                  color: "#474747",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                }}
              ></Typography>
            </div>
            <Typography
              className="sbt-txt"
              variant="h6"
              sx={{
                color: "#8D8D8D",
                fontSize: "1rem",
              }}
            >
              Submit Ticket
            </Typography>
          </CardContent>
        </div>
        <div
          className="dashboard-card"
          onClick={() => {
            navigate("/mytickets");
          }}
        >
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
              className="mytckt-txt"
              variant="h6"
              sx={{
                color: "#8D8D8D",
                fontSize: "1rem",
              }}
            >
              My Tickets
            </Typography>
          </CardContent>
        </div>
      </Box>
    </>
  );
};

export default withResponsiveDrawer(DashboardCards);
