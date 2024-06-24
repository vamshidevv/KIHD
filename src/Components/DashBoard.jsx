import React, { useEffect, useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Popover,
  Box,
  IconButton,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const DashBoard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(null);
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");

    if (!username) {
      // Store the previous location before logging out
      setPreviousLocation(location.pathname);
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/", { replace: true });
  };

  const handleUsernameClick = (event) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchorEl(null);
  };

  const openPopover = Boolean(popoverAnchorEl);

  // Handle browser back button
  useEffect(() => {
    const handleBackNavigation = () => {
      if (!localStorage.getItem("username") && previousLocation) {
        // Navigate back to the previous non-protected location
        window.location.href = previousLocation;
      }
    };

    window.addEventListener("popstate", handleBackNavigation);

    return () => {
      window.removeEventListener("popstate", handleBackNavigation);
    };
  }, [previousLocation]);

  if (!username) {
    return null; // Render nothing while redirecting
  }

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#2e5c9e",
          height: "80px", // Fixed height for AppBar
          lineHeight: "80px", // Ensure vertical centering
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ paddingRight: "30px" }}>
            <Typography
              variant="h6"
              id="logo-name"
              noWrap
              sx={{ flex: "1 0 auto", lineHeight: "85px" }}
            >
              KOLI INFOETCH
            </Typography>
            <Button
              color="inherit"
              endIcon={<ExpandMoreIcon />}
              onClick={handleUsernameClick}
              sx={{ textTransform: "none" }}
            >
              {username}
            </Button>
            <Popover
              open={openPopover}
              anchorEl={popoverAnchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Box>
            </Popover>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
