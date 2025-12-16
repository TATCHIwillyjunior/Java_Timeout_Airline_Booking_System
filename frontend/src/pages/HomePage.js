import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Alert,
} from "@mui/material";
import { searchFlights } from "../api/flightApi";

export default function HomePage() {
  const [searchParams, setSearchParams] = useState({
    departureCity: "",
    arrivalCity: "",
    departureDate: "",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    if (!searchParams.departureCity || !searchParams.arrivalCity || !searchParams.departureDate) {
      setError("Please fill in all search fields");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await searchFlights(
        searchParams.departureCity,
        searchParams.arrivalCity,
        searchParams.departureDate
      );
      setSearchResults(response.data);
    } catch (err) {
      setError("Error searching flights. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Welcome to Timeout Airline Booking System
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
        Search and book flights with ease. Use the navigation bar to manage other features.
      </Typography>

      {/* Search Section */}
      <Card sx={{ mb: 4, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Search Flights
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
          <TextField
            label="Departure City"
            name="departureCity"
            value={searchParams.departureCity}
            onChange={handleChange}
            placeholder="e.g., Paris"
          />
          <TextField
            label="Arrival City"
            name="arrivalCity"
            value={searchParams.arrivalCity}
            onChange={handleChange}
            placeholder="e.g., Tokyo"
          />
          <TextField
            label="Departure Date"
            name="departureDate"
            type="date"
            value={searchParams.departureDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            disabled={loading}
            sx={{ alignSelf: "flex-end" }}
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </Box>

        {error && <Alert severity="error">{error}</Alert>}
      </Card>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Available Flights
          </Typography>
          <Grid container spacing={2}>
            {searchResults.map((flight, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Flight {flight.flightNumber}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {flight.departureCity} → {flight.arrivalCity}
                    </Typography>
                    <Typography variant="body2">
                      Departure: {flight.departureHour} | Arrival: {flight.arrivalHour}
                    </Typography>
                    <Typography variant="body2">
                      Available Seats: {flight.numberOfSeat}
                    </Typography>
                    <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                      <Typography variant="caption" color="primary">
                        Economy: ${flight.economicsClassPrice}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        Business: ${flight.businessClassPrice}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        Premium: ${flight.premiumSeatPrice}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        First Class: ${flight.firstClassSeatPrice}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {searchResults.length === 0 && !loading && !error && (
        <Typography variant="body2" sx={{ textAlign: "center", color: "textSecondary" }}>
          No flights found. Try searching with different criteria.
        </Typography>
      )}
    </Box>
  );
}
