import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function FlightForm() {
  const [form, setForm] = useState({
    flightNo: "",
    departureCity: "",
    arrivalCity: "",
    departureHour: "",
    arrivalHour: "",
    departureAirportId: "",
    arrivalAirportId: "",
    planeId: "",
    noOfSeat: "",
    firstClassSeatPrice: "",
    premiumSeatPrice: "",
    businessClassPrice: "",
    economicsClassPrice: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/flights", form);
    alert("Flight created!");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>Schedule Flight</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" label="Flight No" name="flightNo" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Departure City" name="departureCity" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Arrival City" name="arrivalCity" onChange={handleChange} />
        <TextField fullWidth margin="normal" type="datetime-local" label="Departure Hour" name="departureHour" InputLabelProps={{ shrink: true }} onChange={handleChange} />
        <TextField fullWidth margin="normal" type="datetime-local" label="Arrival Hour" name="arrivalHour" InputLabelProps={{ shrink: true }} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Departure Airport ID" name="departureAirportId" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Arrival Airport ID" name="arrivalAirportId" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Plane ID" name="planeId" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Seats" name="noOfSeat" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="First Class Price" name="firstClassSeatPrice" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Premium Price" name="premiumSeatPrice" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Business Price" name="businessClassPrice" onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Economy Price" name="economicsClassPrice" onChange={handleChange} />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>Create Flight</Button>
      </form>
    </Box>
  );
}
