import React from "react";
import { Typography, Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Timeout Airline Booking System
      </Typography>
      <Typography variant="body1">
        Manage flights, bookings, and rewards with ease. Use the navigation bar to get started.
      </Typography>
    </Box>
  );
}
