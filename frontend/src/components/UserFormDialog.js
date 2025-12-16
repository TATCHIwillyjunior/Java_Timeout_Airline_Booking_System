import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";

const UserFormDialog = ({ open, onClose, onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState(
    initialData || {
      firstname: "",
      lastname: "",
      address: "",
      email: "",
      phoneNo: "",
      birthDate: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
      firstname: "",
      lastname: "",
      address: "",
      email: "",
      phoneNo: "",
      birthDate: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {initialData ? "Edit User" : "Add New User"}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            label="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Phone"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Birthdate"
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {initialData ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserFormDialog;
