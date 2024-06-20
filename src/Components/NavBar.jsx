import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container, Typography } from "@mui/material";
// import koli from "../koli-logo.svg";

function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#2e5c9e",
        height: "80px",
        lineHeight: "80px",
        boxShadow: "none",
        paddingLeft: "30px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="l">
        <Toolbar disableGutters>
          {/* <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              height: 80,
            //   width: 191,
            }}
            alt="Logo"
            src={koli}
          /> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            id="logo-name"
            sx={{ lineHeight: "85px" }}
          >
            KOLI INFOETCH
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
