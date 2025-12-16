import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper
} from "@mui/material";
import FlightForm from "../components/FlightForm";
import axios from "axios";

export default function FlightsPage() {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState({
    departureCity: "",
    arrivalCity: "",
    departureDate: ""
  });

  useEffect(() => {
    axios.get("/api/flights").then(res => setFlights(res.data));
  }, []);

  const handleSearch = async () => {
    try {
      const res = await axios.get("/api/flights/search", {
        params: search
      });
      setFlights(res.data);
    } catch (err) {
      console.error("Search failed:", err);
      alert("No flights found or server error.");
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        ✈️ Flight Management
      </Typography>

      {/* Flight Creation Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Create a Flight
        </Typography>
        <FlightForm />
      </Paper>

      {/* Search Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Search Flights
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}>
          <TextField
            label="Departure City"
            name="departureCity"
            value={search.departureCity}
            onChange={(e) => setSearch({ ...search, departureCity: e.target.value })}
          />
          <TextField
            label="Arrival City"
            name="arrivalCity"
            value={search.arrivalCity}
            onChange={(e) => setSearch({ ...search, arrivalCity: e.target.value })}
          />
          <TextField
            label="Departure Date"
            type="date"
            name="departureDate"
            InputLabelProps={{ shrink: true }}
            value={search.departureDate}
            onChange={(e) => setSearch({ ...search, departureDate: e.target.value })}
          />
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </Box>
      </Paper>

      {/* Flight List Section */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Available Flights
        </Typography>
        {flights.length === 0 ? (
          <Typography variant="body2" color="text.secondary">
            No flights available.
          </Typography>
        ) : (
          <List>
            {flights.map((f) => (
              <React.Fragment key={f.flightsId}>
                <ListItem>
                  <ListItemText
                    primary={`${f.flightNo} - ${f.departureCity} → ${f.arrivalCity}`}
                    secondary={`Departure: ${f.departureHour} | Arrival: ${f.arrivalHour}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
}
