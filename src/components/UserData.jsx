// Import necessary libraries and components from React, Material-UI, Toastify, and Axios
import React, { useState, useEffect } from "react";
import {
  Container, // Material-UI component for centering content with consistent spacing
  Paper, // Material-UI component for card-like structure
  TextField, // Material-UI component for input fields
  Typography, // Material-UI component for text headings
  Table, // Material-UI component for table structure
  TableBody, // Material-UI component for table body
  TableCell, // Material-UI component for table cell
  TableContainer, // Material-UI component to wrap table for styling
  TableHead, // Material-UI component for table header
  TableRow, // Material-UI component for table row
  Button, // Material-UI component for buttons
  Dialog, // Material-UI component for modal dialogs
  DialogTitle, // Material-UI component for dialog title
  DialogContent, // Material-UI component for dialog content
  DialogActions, // Material-UI component for dialog action buttons
  Grid, // Material-UI component for grid-based layout
  Box, // Material-UI component for flexible box layout
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify"; // Toastify for displaying notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toastify's CSS for styling notifications
import axios from "axios"; // Axios library for making HTTP requests

// Define the UserData component
const UserData = () => {
  // State to hold the entire list of users
  const [users, setUsers] = useState([]);
  // State to hold the filtered users based on the search input
  const [filteredUsers, setFilteredUsers] = useState([]);
  // State to manage the value of the search input field
  const [search, setSearch] = useState("");
  // State to control whether the Add/Edit dialog is open
  const [openDialog, setOpenDialog] = useState(false);
  // State to store the user currently being edited (if any)
  const [editUser, setEditUser] = useState(null);
  // State to manage the form inputs for adding or editing a user
  const [userForm, setUserForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    website: "",
  });

  // Fetch the list of users when the component is first rendered
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.org/users") // API URL to fetch user data
      .then((response) => {
        setUsers(response.data); // Save the fetched users to state
        setFilteredUsers(response.data); // Set filtered users to the full list initially
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log any error to the console
      });
  }, []); // Empty dependency array ensures this runs only once, after the initial render

  // Update the filtered users whenever the search input or user list changes
  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.firstname.toLowerCase().includes(search.toLowerCase()) || // Filter by first name
          user.lastname.toLowerCase().includes(search.toLowerCase()) || // Filter by last name
          user.email.toLowerCase().includes(search.toLowerCase()) // Filter by email
      )
    );
  }, [search, users]); // Dependency array ensures this effect runs when `search` or `users` change

  // Handle saving a user, either adding a new one or updating an existing one
  const handleSaveUser = () => {
    if (editUser) {
      // Update the existing user if we are editing
      setUsers(
        users.map((user) =>
          user.id === editUser.id
            ? { ...editUser, ...userForm, company: { name: userForm.company } } // Merge form data with the user
            : user
        )
      );
      toast.success("User updated successfully!"); // Show success notification
    } else {
      // Add a new user if no user is being edited
      const newUser = {
        id: users.length + 1, // Generate a new unique ID
        ...userForm,
        company: { name: userForm.company },
      };
      setUsers([...users, newUser]); // Add the new user to the list
      toast.success("User added successfully!"); // Show success notification
    }

    // Close the dialog and reset the form state
    setOpenDialog(false);
    setEditUser(null);
    setUserForm({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      company: "",
      website: "",
    });
  };

  // Handle deleting a user by their ID
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id)); // Remove the user with the given ID
    toast.error("User deleted successfully!"); // Show deletion notification
  };

  // Open the Add/Edit dialog and populate it with user data if editing
  const handleOpenDialog = (user = null) => {
    if (user) {
      // If editing, set the form with the user's current data
      setEditUser(user);
      setUserForm({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        company: user.company?.name,
        website: user.website,
      });
    } else {
      // If adding a new user, reset the form
      setEditUser(null);
      setUserForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        company: "",
        website: "",
      });
    }
    setOpenDialog(true); // Open the dialog
  };

  return (
    <Container>
      {/* Toastify container for displaying notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Paper
        elevation={3} // Add shadow effect
        sx={{
          padding: "20px 100px", // Add padding for spacing
          marginTop: "20px", // Add top margin
          backgroundColor: "#F5F6F9", // Set background color
        }}
      >
        {/* Component title */}
        <Typography variant="h5" gutterBottom sx={{ color: "#4B95D6" }}>
          User Data
        </Typography>

        {/* Add User and Search controls */}
        <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpenDialog()} // Open the dialog to add a user
              sx={{
                borderRadius: "8px",
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" }, // Add hover effect
              }}
            >
              Add User
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Search by name or email"
              fullWidth
              value={search} // Bind to search state
              onChange={(e) => setSearch(e.target.value)} // Update search state on change
              sx={{ backgroundColor: "#FFFFFF", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>

        {/* Table to display user data */}
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "10px",
            overflowX: "auto", // Allow horizontal scrolling
            marginLeft: "-20px",
            "@media (max-width: 600px)": {
              marginLeft: 0, // Adjust for small screens
            },
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#4B95D6" }}>
                <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  First Name
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  Last Name
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  Email
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  Phone
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  Company
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.company?.name}</TableCell>
                  <TableCell>
                    <Box display="flex" gap={1}>
                      {/* Edit button */}
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#43a047",
                          "&:hover": { backgroundColor: "#388e3c" },
                          borderRadius: "8px",
                        }}
                        onClick={() => handleOpenDialog(user)}
                      >
                        Edit
                      </Button>
                      {/* Delete button */}
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#e53935",
                          "&:hover": { backgroundColor: "#d32f2f" },
                          borderRadius: "8px",
                        }}
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Dialog for adding or editing a user */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{editUser ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          {/* Form inputs for user data */}
          <TextField
            label="First Name"
            fullWidth
            value={userForm.firstname}
            onChange={(e) =>
              setUserForm((prev) => ({ ...prev, firstname: e.target.value }))
            }
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Last Name"
            fullWidth
            value={userForm.lastname}
            onChange={(e) =>
              setUserForm((prev) => ({ ...prev, lastname: e.target.value }))
            }
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email"
            fullWidth
            value={userForm.email}
            onChange={(e) =>
              setUserForm((prev) => ({ ...prev, email: e.target.value }))
            }
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Phone"
            fullWidth
            value={userForm.phone}
            onChange={(e) =>
              setUserForm((prev) => ({ ...prev, phone: e.target.value }))
            }
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Company Name"
            fullWidth
            value={userForm.company}
            onChange={(e) =>
              setUserForm((prev) => ({ ...prev, company: e.target.value }))
            }
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Website"
            fullWidth
            value={userForm.website}
            onChange={(e) =>
              setUserForm((prev) => ({ ...prev, website: e.target.value }))
            }
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          {/* Dialog buttons */}
          <Button
  onClick={() => setOpenDialog(false)}
  color="secondary"
  variant="outlined"
  sx={{
    color: "#1976d2", // Set text color
    borderColor: "#1976d2", // Set border color
    "&:hover": {
      backgroundColor: "#e3f2fd", // Add a visible hover effect
    },
  }}
>
  Cancel
</Button>
          <Button onClick={handleSaveUser} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

// Export the UserData component
export default UserData;
