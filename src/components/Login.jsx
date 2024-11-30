// Import necessary libraries and components
import React from "react";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik"; // Import Formik for form management
import * as Yup from "yup"; // Import Yup for validation schema

// Define validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required") // Username is required
    .min(3, "Username must be at least 3 characters long"), // Minimum length validation
  password: Yup.string()
    .required("Password is required") // Password is required
    .min(6, "Password must be at least 6 characters long"), // Minimum length validation
});

const Login = ({ setUser }) => {
  // Use Formik to manage form state and handle validation
  const formik = useFormik({
    initialValues: {
      username: "", // Initial value for username
      password: "", // Initial value for password
    },
    validationSchema, // Attach Yup validation schema
    onSubmit: (values) => {
      setUser(values.username); // Set username in parent state on successful login
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          marginTop: "10vh",
          backgroundColor: "#F5F6F9",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          {/* Username input field */}
          <TextField
            label="Username"
            name="username"
            fullWidth
            margin="normal"
            value={formik.values.username} // Bind Formik's state
            onChange={formik.handleChange} // Update state on input change
            onBlur={formik.handleBlur} // Mark field as touched on blur
            error={formik.touched.username && Boolean(formik.errors.username)} // Show error if touched and validation fails
            helperText={formik.touched.username && formik.errors.username} // Display validation message
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
            }}
          />
          {/* Password input field */}
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={formik.values.password} // Bind Formik's state
            onChange={formik.handleChange} // Update state on input change
            onBlur={formik.handleBlur} // Mark field as touched on blur
            error={formik.touched.password && Boolean(formik.errors.password)} // Show error if touched and validation fails
            helperText={formik.touched.password && formik.errors.password} // Display validation message
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
