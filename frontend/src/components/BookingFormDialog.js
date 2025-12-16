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

const BookingFormDialog = ({ open, onClose, onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState(
    initialData || {
      flightId: "",
      clientId: "",
      typeOfSeat: "ECONOMY",
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
    const submitData = {
      flightId: parseInt(formData.flightId),
      clientId: parseInt(formData.clientId),
      typeOfSeat: formData.typeOfSeat,
    };
    onSubmit(submitData);
    setFormData({
      flightId: "",
      clientId: "",
      typeOfSeat: "ECONOMY",
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {initialData ? "Edit Booking" : "Create New Booking"}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            label="Flight ID"
            name="flightId"
            type="number"
            value={formData.flightId}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Client ID"
            name="clientId"
            type="number"
            value={formData.clientId}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Type of Seat"
            name="typeOfSeat"
            value={formData.typeOfSeat}
            onChange={handleChange}
            select
            SelectProps={{ native: true }}
            fullWidth
          >
            <option value="ECONOMY">Economy</option>
            <option value="BUSINESS">Business</option>
            <option value="PREMIUM">Premium</option>
            <option value="FIRST">First</option>
          </TextField>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {initialData ? "Update" : "Book Flight"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingFormDialog;
