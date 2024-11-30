// Import necessary libraries and components from React and Material-UI
import React from "react";
import { Container, Paper, Typography, Button } from "@mui/material";

// Define the Settings component, which accepts a 'setUser' prop for managing user state
const Settings = ({ setUser }) => (
  // Wrap the component's content in a Material-UI Container for consistent spacing and alignment
  <Container>
    {/* Use a Paper component to create a styled container with elevation and padding */}
    <Paper
      elevation={3} // Adds shadow to the Paper component for a 3D effect
      sx={{ 
        padding: "20px", // Padding inside the Paper for spacing
        marginTop: "20px", // Add vertical margin to separate the Paper from other components
        textAlign: "center", // Center align all content inside the Paper
        backgroundColor: "#F5F6F9" // Light background color for better aesthetics
      }}
    >
      {/* Add a title for the Settings page */}
      <Typography 
        variant="h5" // Set the Typography variant to h5 for medium-sized text
        gutterBottom // Add space below the title
      >
        Settings
      </Typography>

      {/* Add a logout button */}
      <Button
        variant="contained" // Use the "contained" variant for a solid, colored button
        color="primary" // Use the primary theme color for the button
        onClick={() => setUser(null)} // Clear the user state to log out the user
        sx={{ 
          borderRadius: "8px" // Add rounded corners to the button
        }}
      >
        Logout {/* Text displayed on the button */}
      </Button>
    </Paper>
  </Container>
);

// Export the Settings component for use in other parts of the application
export default Settings;
