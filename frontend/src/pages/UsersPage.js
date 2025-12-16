import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import UserFormDialog from "../components/UserFormDialog";
import { getUsers, createUser, updateUser, deleteUser } from "../api/userApi";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (err) {
      setError("Error loading users. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (userData) => {
    try {
      await createUser(userData);
      setOpenForm(false);
      fetchUsers();
    } catch (err) {
      setError("Error adding user. Please try again.");
      console.error(err);
    }
  };

  const handleEditUser = async (userData) => {
    try {
      await updateUser(editingUser.userId, userData);
      setOpenForm(false);
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      setError("Error updating user. Please try again.");
      console.error(err);
    }
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setOpenDelete(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteUser(selectedUser.userId);
      setOpenDelete(false);
      setSelectedUser(null);
      fetchUsers();
    } catch (err) {
      setError("Error deleting user. Please try again.");
      console.error(err);
    }
  };

  const handleOpenForm = (user = null) => {
    setEditingUser(user);
    setOpenForm(true);
  };

  if (loading) return <CircularProgress />;

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <h2>Users Management</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenForm()}
        >
          Add New User
        </Button>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Birthdate</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNo}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.birthDate}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handleOpenForm(user)}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteClick(user)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <UserFormDialog
        open={openForm}
        onClose={() => {
          setOpenForm(false);
          setEditingUser(null);
        }}
        onSubmit={editingUser ? handleEditUser : handleAddUser}
        initialData={editingUser}
      />

      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete user {selectedUser?.firstname} {selectedUser?.lastname}?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
