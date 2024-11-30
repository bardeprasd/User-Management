import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Home from "./components/Home";
import Login from "./components/Login";
import Settings from "./components/Settings";
import UserData from "./components/UserData";

// Custom Material-UI Theme
// This defines the application's primary colors, typography, and component styles using Material-UI's theme provider.
const theme = createTheme({
  palette: {
    primary: {
      main: "#4B95D6", // Light blue for primary actions
    },
    secondary: {
      main: "#F5F6F9", // Light gray for secondary backgrounds
    },
    background: {
      default: "#FFFFFF", // Default background color
      paper: "#F5F6F9", // Paper background color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Global font family
    h4: {
      fontWeight: 600,
      color: "#4B95D6", // Header text color
    },
    body1: {
      color: "#333333", // Default text color
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#4B95D6", // Header background
          color: "#FFFFFF", // Header text color
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase on buttons
          borderRadius: "8px", // Rounded corners for buttons
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "20px", // Padding for Paper components
          borderRadius: "10px", // Rounded corners for Paper components
        },
      },
    },
  },
});

const App = () => {
  const [user, setUser] = useState(null); // State to manage user login status

  return (
    // Apply the custom Material-UI theme to the entire application
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Router wraps the application to handle navigation and routing */}
        <Router>
          {/* AppBar (Header) with navigation links */}
          <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
            <Toolbar>
              {/* Application title */}
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                User Management
              </Typography>
              {/* Conditional rendering of navigation buttons based on login state */}
              {user && (
                <Box>
                  <Button color="inherit" component={Link} to="/home">
                    Home
                  </Button>
                  <Button color="inherit" component={Link} to="/user-data">
                    User Data
                  </Button>
                  <Button color="inherit" component={Link} to="/settings">
                    Settings
                  </Button>
                </Box>
              )}
            </Toolbar>
          </AppBar>

          {/* Main content area */}
          <Box sx={{ flex: "1", paddingBottom: "50px" }}>
            {/* Define application routes */}
            <Routes>
              {/* Login route: Redirect to Home if logged in */}
              <Route
                path="/"
                element={!user ? <Login setUser={setUser} /> : <Navigate to="/home" />}
              />

              {/* Home route: Accessible only if logged in */}
              <Route
                path="/home"
                element={user ? <Home user={user} /> : <Navigate to="/" />}
              />

              {/* User Data route: Accessible only if logged in */}
              <Route
                path="/user-data"
                element={user ? <UserData /> : <Navigate to="/" />}
              />

              {/* Settings route: Accessible only if logged in */}
              <Route
                path="/settings"
                element={user ? <Settings setUser={setUser} /> : <Navigate to="/" />}
              />
            </Routes>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
