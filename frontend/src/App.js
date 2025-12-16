import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import FlightsPage from "./pages/FlightsPage";
import BookingsPage from "./pages/BookingsPage";
import RewardsPage from "./pages/RewardsPage";

import "./App.css";

export default function App() {
  return (
    <Router>
      <AppBar position="static" color="primary">
        <Toolbar>
          <FlightTakeoffIcon sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Timeout Airline Booking System
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/users">Users</Button>
          <Button color="inherit" component={Link} to="/flights">Flights</Button>
          <Button color="inherit" component={Link} to="/bookings">Bookings</Button>
          <Button color="inherit" component={Link} to="/rewards">Rewards</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Box className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/flights" element={<FlightsPage />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}
