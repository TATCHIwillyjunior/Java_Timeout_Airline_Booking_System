import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

export default function BookingForm() {
  const [form, setForm] = useState({
    flightId: "",
    clientId: "",
    typeOfSeat: "",
    bookedAt: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/bookings", form);
    alert("Booking created!");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>Book a Flight</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" label="Flight ID" name="flightId" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Client ID" name="clientId" onChange={handleChange} />
        <TextField
          select
          fullWidth
          margin="normal"
          label="Seat Type"
          name="typeOfSeat"
          value={form.typeOfSeat}
          onChange={handleChange}
        >
          <MenuItem value="ECONOMY">Economy</MenuItem>
          <MenuItem value="BUSINESS">Business</MenuItem>
          <MenuItem value="PREMIUM">Premium</MenuItem>
          <MenuItem value="FIRST">First Class</MenuItem>
        </TextField>
        <TextField
          fullWidth
          margin="normal"
          type="datetime-local"
          name="bookedAt"
          label="Booking Date"
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Book Flight</Button>
      </form>
    </Box>
  );
}
