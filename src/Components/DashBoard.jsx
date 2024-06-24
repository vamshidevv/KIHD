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
import ResponsiveDrawer from "./Drawer";

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

  useEffect(() => {
    const handleBackNavigation = () => {
      if (!localStorage.getItem("username") && previousLocation) {
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
          height: "80px",
          boxShadow: "none",
          paddingLeft: { sm: "0px", lg: "30px" },
        }}
      >
        <Container maxWidth="l">
          <Toolbar
            disableGutters
            sx={{ paddingRight: { sm: "0px", lg: "30px" } }}
          >
            <Typography
              variant="h6"
              id="logo-name"
              noWrap
              sx={{ flex: "1 0 auto", lineHeight: "85px" }}
            >
              KOLI INFOTECH
            </Typography>
            <Button
              color="inherit"
              endIcon={<ExpandMoreIcon />}
              onClick={handleUsernameClick}
              sx={{
                textTransform: "none",
                fontSize: "1.1rem",
                letterSpacing: "0.5px",
              }}
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
              <Box sx={{ width: "150px", py: 0.4 }}>
                <Button
                  variant="text"
                  color="primary"
                  onClick={handleLogout}
                  sx={{
                    width: "150px",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    color: "#2e5c9e",
                    textTransform: "capitalize",
                  }}
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
