import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Container, Popover } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import { Blocks } from "react-loader-spinner";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const [isLoading, setIsLoading] = useState(true);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(null);
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const username = localStorage.getItem("username");

    if (!username) {
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

    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handleBackNavigation);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("popstate", handleBackNavigation);
      }
    };
  }, [previousLocation]);

  if (!username) {
    return null; // Render nothing while redirecting
  }

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const drawer = (
    <div>
      <List>
        {["Dashboard", "Submit Ticket", "My Ticket"].map((text, index) => {
          let icon;
          switch (text) {
            case "Dashboard":
              icon = (
                <DashboardIcon sx={{ height: "2.2rem", width: "1.8rem" }} />
              );
              break;
            case "Submit Ticket":
              icon = <PostAddIcon sx={{ height: "2.2rem", width: "1.8rem" }} />;
              break;
            case "My Ticket":
              icon = (
                <ConfirmationNumberIcon
                  sx={{ height: "2.2rem", width: "1.8rem" }}
                />
              );
              break;
            default:
              icon = <MailIcon fontSize="large" />;
          }
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  color: "#474747",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "rgba(46, 92, 158, 0.1)",
                  },
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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              //   id="logo-name"
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
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          mt: "80px",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none",
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
              width: drawerWidth,
              mt: "80px",
              border: "none",
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
          height: "100vh",
          backgroundColor: "#f6f6f6",
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {isLoading === true ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "85vh",
            }}
          >
            <Blocks
              height="60"
              width="60"
              color="#4fa94d"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              visible={true}
            />
          </div>
        ) : (
          <div>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
          </div>
        )}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
