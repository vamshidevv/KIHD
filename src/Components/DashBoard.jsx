import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

export const DashBoard = () => {
  return (
    <>
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
    </>
  );
};
