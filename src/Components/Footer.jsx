// src/components/Footer.js

import React from "react";
import {
  Box,
  Typography,
  Link,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        py: 1.5,
        px: 2,
        mt: "auto",
        backgroundColor: "#e4e4e4",
        textAlign: "center",
        width: "100%",
        position: "fixed",
        bottom: 0,
        flexShrink: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="body2" sx={{ fontWeight: "500" }}>
              WWW.KOLIINFOTECH.COM @ 2024. KOLIINFOTECH. ALL RIGHTS RESERVED.
              (VERSION : 1.2.7.0)
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              <Link href="mailto:eshdsupport@excelindia.com" underline="hover">
                Contact Us: eshdsupport@excelindia.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
