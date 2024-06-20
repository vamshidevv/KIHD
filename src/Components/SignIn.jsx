import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Avatar } from "@mui/material";

export default function SignIn() {
  return (
    <Container component="main" maxWidth="l">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          align="left"
          sx={{ width: "100%" }}
          style={{
            fontSize: "22.4px",
            fontWeight: "550",
            color: "#474747",
            letterSpacing: "-1px",
            marginBottom: "5px",
          }}
        >
          SIGN IN
        </Typography>
        <Box component="form" noValidate sx={{ width: "100%" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User name"
            name="username"
            autoComplete="username"
            autoFocus
            InputProps={{
              endAdornment: (
                <Box sx={{ display: "flex", alignItems: "center", pr: 1 }}>
                  <Avatar
                    sx={{
                      width: 25,
                      height: 25,
                      bgcolor: "transparent",
                      color: "#9d9d9d",
                    }}
                  >
                    <AccountCircleOutlinedIcon fontSize="medium" />
                  </Avatar>
                </Box>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2e5c9e",
                },
              },
              "& .MuiFormLabel-root": {
                color: "rgba(0, 0, 0, 0.70)",
              },

              "& .MuiFormLabel-asterisk": {
                color: "red",
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <Box sx={{ display: "flex", alignItems: "center", pr: 1 }}>
                  <Avatar
                    sx={{
                      width: 25,
                      height: 25,
                      bgcolor: "transparent",
                      color: "#9d9d9d",
                    }}
                  >
                    <LockOpenOutlinedIcon fontSize="medium" />
                  </Avatar>
                </Box>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#2e5c9e",
                },
              },
              "& .MuiFormLabel-root": {
                color: "rgba(0, 0, 0, 0.70)",
              },

              "& .MuiFormLabel-asterisk": {
                color: "red",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              px: 1.8,
              bgcolor: "#2e5c9e",
              ":hover": { bgcolor: "#2e5c9ee0" },
              color: "#fff",
              fontWeight: "500",
              fontSize: "1rem",
            }}
          >
            SIGN IN
          </Button>
          <Typography
            variant="body2"
            color="textSecondary"
            align="left"
            sx={{ mt: 0, color: "#FFC107" }}
          >
            Note: If you encounter issues logging in with your account, please
            click{" "}
            <Link href="#" color="inherit" sx={{ color: "#2e5c9e" }}>
              here
            </Link>{" "}
            to submit a ticket to Reset/Unlock your account.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
