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

const FlightFormDialog = ({ open, onClose, onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState(
    initialData || {
      flightNo: "",
      departureCity: "",
      arrivalCity: "",
      departureDate: "",
      departureTime: "",
      arrivalDate: "",
      arrivalTime: "",
      departureAirportId: "",
      arrivalAirportId: "",
      planeId: "",
      noOfSeat: "",
      firstClassSeatPrice: "",
      premiumSeatPrice: "",
      businessClassPrice: "",
      economicsClassPrice: "",
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
    // Combine date and time into LocalDateTime format (ISO 8601)
    const departureHour = formData.departureDate && formData.departureTime 
      ? `${formData.departureDate}T${formData.departureTime}:00`
      : null;
    const arrivalHour = formData.arrivalDate && formData.arrivalTime
      ? `${formData.arrivalDate}T${formData.arrivalTime}:00`
      : null;

    const submitData = {
      flightNo: formData.flightNo,
      departureCity: formData.departureCity,
      arrivalCity: formData.arrivalCity,
      departureHour: departureHour,
      arrivalHour: arrivalHour,
      departureAirportId: formData.departureAirportId ? parseInt(formData.departureAirportId) : null,
      arrivalAirportId: formData.arrivalAirportId ? parseInt(formData.arrivalAirportId) : null,
      planeId: formData.planeId ? parseInt(formData.planeId) : null,
      noOfSeat: parseInt(formData.noOfSeat),
      firstClassSeatPrice: parseFloat(formData.firstClassSeatPrice),
      premiumSeatPrice: parseFloat(formData.premiumSeatPrice),
      businessClassPrice: parseFloat(formData.businessClassPrice),
      economicsClassPrice: parseFloat(formData.economicsClassPrice),
    };

    onSubmit(submitData);
    setFormData({
      flightNo: "",
      departureCity: "",
      arrivalCity: "",
      departureDate: "",
      departureTime: "",
      arrivalDate: "",
      arrivalTime: "",
      departureAirportId: "",
      arrivalAirportId: "",
      planeId: "",
      noOfSeat: "",
      firstClassSeatPrice: "",
      premiumSeatPrice: "",
      businessClassPrice: "",
      economicsClassPrice: "",
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {initialData ? "Edit Flight" : "Add New Flight"}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          <TextField
            label="Flight Number"
            name="flightNo"
            value={formData.flightNo}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Departure City"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Arrival City"
            name="arrivalCity"
            value={formData.arrivalCity}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Departure Date"
            name="departureDate"
            type="date"
            value={formData.departureDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Departure Time"
            name="departureTime"
            type="time"
            value={formData.departureTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Arrival Date"
            name="arrivalDate"
            type="date"
            value={formData.arrivalDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Arrival Time"
            name="arrivalTime"
            type="time"
            value={formData.arrivalTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Departure Airport ID"
            name="departureAirportId"
            type="number"
            value={formData.departureAirportId}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Arrival Airport ID"
            name="arrivalAirportId"
            type="number"
            value={formData.arrivalAirportId}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Plane ID"
            name="planeId"
            type="number"
            value={formData.planeId}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Number of Seats"
            name="noOfSeat"
            type="number"
            value={formData.noOfSeat}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="First Class Price"
            name="firstClassSeatPrice"
            type="number"
            inputProps={{ step: "0.01" }}
            value={formData.firstClassSeatPrice}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Premium Seat Price"
            name="premiumSeatPrice"
            type="number"
            inputProps={{ step: "0.01" }}
            value={formData.premiumSeatPrice}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Business Class Price"
            name="businessClassPrice"
            type="number"
            inputProps={{ step: "0.01" }}
            value={formData.businessClassPrice}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Economics Class Price"
            name="economicsClassPrice"
            type="number"
            inputProps={{ step: "0.01" }}
            value={formData.economicsClassPrice}
            onChange={handleChange}
            fullWidth
            required
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

export default FlightFormDialog;
