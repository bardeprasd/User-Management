// Importing React to use JSX and create the functional component
import React from "react";
// Importing Material-UI components for layout, styling, and buttons
import { Container, Paper, Typography, Box, Button } from "@mui/material";
// Importing Link from react-router-dom for navigation
import { Link } from "react-router-dom";

// Defining the Home functional component that takes a 'user' prop
const Home = ({ user }) => (
  // Container component to provide consistent padding and center alignment
  <Container>
    {/* Paper component for a card-like UI with elevation and padding */}
    <Paper 
      elevation={3} // Sets shadow depth for the Paper component
      sx={{ padding: "20px", marginTop: "20px", backgroundColor: "#F5F6F9" }} // Inline styles for spacing and background color
    >
      {/* Typography component for the welcome message */}
      <Typography 
        variant="h4" // Sets the heading size and style
        align="center" // Centers the text horizontally
        gutterBottom // Adds margin below the Typography element
      >
        Welcome, {user}! {/* Displays the 'user' prop passed to the component */}
      </Typography>
      {/* Box component for layout, creating a horizontal flexbox container */}
      <Box 
        display="flex" // Enables flexbox layout
        justifyContent="center" // Centers child elements horizontally
        gap={2} // Adds spacing between child elements
      >
        {/* Button component to navigate to the User Data page */}
        <Button 
          variant="contained" // Applies a filled button style
          color="primary" // Sets the primary color (typically blue)
          component={Link} // Makes the button a navigation link
          to="/user-data" // Specifies the target route
        >
          User Data {/* Label displayed on the button */}
        </Button>
        {/* Button component to navigate to the Settings page */}
        <Button 
          variant="contained" // Applies a filled button style
          color="secondary" // Sets the secondary color (typically red or a variant)
          component={Link} // Makes the button a navigation link
          to="/settings" // Specifies the target route
        >
          Settings {/* Label displayed on the button */}
        </Button>
      </Box>
    </Paper>
  </Container>
);

// Exporting the Home component as the default export
export default Home;
