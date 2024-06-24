import * as React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Avatar } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  username: yup
    .string()
    .required("User name is required")
    .min(3, "User name should be at least 3 characters long"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should be at least 6 characters long"),
});

export default function SignIn() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setSubmitted(true);
      axios
        .get("http://localhost:3000/user")
        .then((res) => {
          const userData = res.data;
          console.log("===>", userData);
          const foundUser = userData.find(
            (user) =>
              user.username === values.username &&
              user.password === values.password
          );
          if (foundUser) {
           localStorage.setItem("username", foundUser.username);
            navigate("/dashboard");
          } else {
            alert("Invalid username or password");
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          alert("An error occurred while logging in.");
        });
    },
  });

  return (
    <Container component="main" maxWidth="l">
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
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ width: "100%" }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="username"
            name="username"
            label={
              <div>
                User name
                {formik.errors.username && formik.touched.username && (
                  <span style={{ color: "red", marginLeft: "5px" }}>*</span>
                )}
              </div>
            }
            autoComplete="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("username")}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
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
                "& fieldset": {
                  borderColor:
                    formik.errors.username && submitted
                      ? "#f44336"
                      : formik.touched.username && !formik.errors.username
                      ? "#4caf50"
                      : formik.touched.username
                      ? "#2e5c9e61"
                      : "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                    formik.errors.username && submitted
                      ? "#d32f2f6e"
                      : formik.touched.username && !formik.errors.username
                      ? "#00800075"
                      : "#2e5c9e61",
                  borderWidth: "3px",
                },
              },
              "& .MuiFormLabel-root": {
                color: "rgba(0, 0, 0, 0.54)",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "rgba(0, 0, 0, 0.54)",
              },
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            type="password"
            id="password"
            label={
              <div>
                Password
                {formik.errors.password && formik.touched.password && (
                  <span style={{ color: "red", marginLeft: "5px" }}>*</span>
                )}
              </div>
            }
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("password")}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
                    {formik.touched.password &&
                    !formik.errors.password &&
                    formik.values.password.length >= 6 ? (
                      <LockOpenOutlinedIcon fontSize="medium" />
                    ) : (
                      <LockOutlinedIcon fontSize="medium" />
                    )}
                  </Avatar>
                </Box>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor:
                    formik.errors.password && submitted
                      ? "#f44336"
                      : formik.touched.password && !formik.errors.password
                      ? "#4caf50"
                      : formik.touched.password
                      ? "#2e5c9e61"
                      : "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                    formik.errors.password && submitted
                      ? "#d32f2f6e"
                      : formik.touched.password && !formik.errors.password
                      ? "#00800075"
                      : "#2e5c9e61",
                  borderWidth: "3px",
                },
              },
              "& .MuiFormLabel-root": {
                color: "rgba(0, 0, 0, 0.54)",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "rgba(0, 0, 0, 0.54)",
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
            onClick={() => setSubmitted(true)}
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
