import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Popover } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Footer from "./Footer";
import { OrbitProgress } from "react-loading-indicators";

const drawerWidth = 240;

function ResponsiveDrawer({ window, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [activeSection, setActiveSection] = useState("Dashboard");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const username = sessionStorage.getItem("username");

    if (!username) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case "/dashboard":
        setActiveSection("Dashboard");
        break;
      case "/submitticket":
        setActiveSection("Submit Ticket");
        break;
      case "/mytickets":
        setActiveSection("My Ticket");
        break;
      case "/viewticketdetails":
        setActiveSection("");
        break;
      default:
        setActiveSection("Dashboard");
    }
  }, [location]);

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

  const handleDrawerToggle = () => {
    if (mobileOpen && !drawerOpen) {
      setMobileOpen(false);
    } else {
      setMobileOpen(!mobileOpen);
      setDrawerOpen(!drawerOpen);
    }
  };

  const handleSectionClick = (sectionName, path) => {
    setActiveSection(sectionName);
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <div>
      <List>
        {["Dashboard", "Submit Ticket", "My Ticket"].map((text) => {
          let icon;
          let path = "/";
          switch (text) {
            case "Dashboard":
              icon = (
                <DashboardIcon sx={{ height: "2.2rem", width: "1.8rem" }} />
              );
              path = "/dashboard";
              break;
            case "Submit Ticket":
              icon = <PostAddIcon sx={{ height: "2.2rem", width: "1.8rem" }} />;
              path = "/submitticket";
              break;
            case "My Ticket":
              icon = (
                <ConfirmationNumberIcon
                  sx={{ height: "2.2rem", width: "1.8rem" }}
                />
              );
              path = "/mytickets";
              break;
            default:
              icon = <MenuIcon />;
          }
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton
                title={text}
                selected={activeSection === text}
                onClick={() => handleSectionClick(text, path)}
                sx={{
                  color: "#474747",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "rgba(46, 92, 158, 0.1)",
                  },
                  ...(activeSection === text && {
                    backgroundColor: "rgba(46, 92, 158, 0.1)",
                  }),
                }}
              >
                <ListItemIcon sx={{ color: "#2e5c9e" }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: "100%",
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
              {drawerOpen && (
                <IconButton
                  color="inherit"
                  aria-label="close drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "block" } }}
                >
                  <MenuIcon id="close-icon" />{" "}
                </IconButton>
              )}
              {!drawerOpen && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "block" } }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography
                variant="h6"
                noWrap
                sx={{
                  flex: "1 0 auto",
                  lineHeight: "85px",
                  fontSize: { xs: "1rem", sm: "1.6rem", lg: "1.7rem" },
                  fontFamily: "'Stardos Stencil', 'system-ui', sans-serif",
                  fontWeight: "600",
                }}
              >
                KOLI INFOTECH
              </Typography>
              <Button
                color="inherit"
                endIcon={<ExpandMoreIcon />}
                onClick={handleUsernameClick}
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "0.9rem", lg: "1.1rem" },
                  fontFamily: "'Stardos Stencil', 'system-ui', sans-serif",
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
                    variant="txt"
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

        <Box
          component="nav"
          sx={{
            width: { sm: drawerOpen ? drawerWidth : 0 },
            flexShrink: { sm: 0 },
            mt: "80px",
            transition: "width 0.3s",
          }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                boxShadow: "0 0 20px rgba(1,41,112,.1)",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerOpen ? drawerWidth : 0,
                mt: "80px",
                transition: "width 0.3s",
                boxShadow: "0 0 20px rgba(1,41,112,.1)",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: "100vh",
            backgroundColor: "#f6f6f6",
            p: { xs: 0, sm: 0, md: 3, lg: 3 },
            width: { sm: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` },
            transition: "width 0.3s",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {isLoading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "85vh",
              }}
            >
              <OrbitProgress color="#2e5c9e" size="small" />
            </div>
          ) : (
            <div style={{ width: "100%", overflow: "auto" }}>{children}</div>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node,
};

export default ResponsiveDrawer;
