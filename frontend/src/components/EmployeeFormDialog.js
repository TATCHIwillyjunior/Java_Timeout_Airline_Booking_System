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

const EmployeeFormDialog = ({ open, onClose, onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState(
    initialData || {
      userId: "",
      employeeNo: "",
      profession: "",
      title: "",
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
      userId: "",
      employeeNo: "",
      profession: "",
      title: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {initialData ? "Edit Employee" : "Add New Employee"}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            label="User ID"
            name="userId"
            type="number"
            value={formData.userId}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Employee Number"
            name="employeeNo"
            value={formData.employeeNo}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
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

export default EmployeeFormDialog;
