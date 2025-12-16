import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
} from "@mui/material";
import PlaneFormDialog from "../components/PlaneFormDialog";
import AirportFormDialog from "../components/AirportFormDialog";
import FlightFormDialog from "../components/FlightFormDialog";
import {
  getFlights,
  createFlight,
  updateFlight,
  deleteFlight,
} from "../api/flightApi";
import {
  getPlanes,
  createPlane,
  updatePlane,
  deletePlane,
} from "../api/planeApi";
import {
  getAirports,
  createAirport,
  updateAirport,
  deleteAirport,
} from "../api/airportApi";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ width: "100%" }}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function FlightsPage() {
  const [tabValue, setTabValue] = useState(0);

  // Flights state
  const [flights, setFlights] = useState([]);
  const [flightLoading, setFlightLoading] = useState(true);
  const [flightError, setFlightError] = useState(null);
  const [openFlightForm, setOpenFlightForm] = useState(false);
  const [openFlightDelete, setOpenFlightDelete] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [editingFlight, setEditingFlight] = useState(null);

  // Planes state
  const [planes, setPlanes] = useState([]);
  const [planeLoading, setPlaneLoading] = useState(true);
  const [planeError, setPlaneError] = useState(null);
  const [openPlaneForm, setOpenPlaneForm] = useState(false);
  const [openPlaneDelete, setOpenPlaneDelete] = useState(false);
  const [selectedPlane, setSelectedPlane] = useState(null);
  const [editingPlane, setEditingPlane] = useState(null);

  // Airports state
  const [airports, setAirports] = useState([]);
  const [airportLoading, setAirportLoading] = useState(true);
  const [airportError, setAirportError] = useState(null);
  const [openAirportForm, setOpenAirportForm] = useState(false);
  const [openAirportDelete, setOpenAirportDelete] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [editingAirport, setEditingAirport] = useState(null);

  useEffect(() => {
    if (tabValue === 0) {
      fetchFlights();
    } else if (tabValue === 1) {
      fetchPlanes();
    } else if (tabValue === 2) {
      fetchAirports();
    }
  }, [tabValue]);

  // FLIGHTS MANAGEMENT
  const fetchFlights = async () => {
    setFlightLoading(true);
    setFlightError(null);
    try {
      const response = await getFlights();
      setFlights(response.data);
    } catch (err) {
      setFlightError("Error loading flights.");
      console.error(err);
    } finally {
      setFlightLoading(false);
    }
  };

  const handleAddFlight = async (flightData) => {
    try {
      await createFlight(flightData);
      setOpenFlightForm(false);
      fetchFlights();
    } catch (err) {
      setFlightError("Error adding flight.");
      console.error(err);
    }
  };

  const handleEditFlight = async (flightData) => {
    try {
      await updateFlight(editingFlight.flightsId, flightData);
      setOpenFlightForm(false);
      setEditingFlight(null);
      fetchFlights();
    } catch (err) {
      setFlightError("Error updating flight.");
      console.error(err);
    }
  };

  const handleDeleteFlight = async () => {
    try {
      await deleteFlight(selectedFlight.flightsId);
      setOpenFlightDelete(false);
      setSelectedFlight(null);
      fetchFlights();
    } catch (err) {
      setFlightError("Error deleting flight.");
      console.error(err);
    }
  };

  // PLANES MANAGEMENT
  const fetchPlanes = async () => {
    setPlaneLoading(true);
    setPlaneError(null);
    try {
      const response = await getPlanes();
      setPlanes(response.data);
    } catch (err) {
      setPlaneError("Error loading planes.");
      console.error(err);
    } finally {
      setPlaneLoading(false);
    }
  };

  const handleAddPlane = async (planeData) => {
    try {
      await createPlane(planeData);
      setOpenPlaneForm(false);
      fetchPlanes();
    } catch (err) {
      setPlaneError("Error adding plane.");
      console.error(err);
    }
  };

  const handleEditPlane = async (planeData) => {
    try {
      await updatePlane(editingPlane.planeId, planeData);
      setOpenPlaneForm(false);
      setEditingPlane(null);
      fetchPlanes();
    } catch (err) {
      setPlaneError("Error updating plane.");
      console.error(err);
    }
  };

  const handleDeletePlane = async () => {
    try {
      await deletePlane(selectedPlane.planeId);
      setOpenPlaneDelete(false);
      setSelectedPlane(null);
      fetchPlanes();
    } catch (err) {
      setPlaneError("Error deleting plane.");
      console.error(err);
    }
  };

  // AIRPORTS MANAGEMENT
  const fetchAirports = async () => {
    setAirportLoading(true);
    setAirportError(null);
    try {
      const response = await getAirports();
      setAirports(response.data);
    } catch (err) {
      setAirportError("Error loading airports.");
      console.error(err);
    } finally {
      setAirportLoading(false);
    }
  };

  const handleAddAirport = async (airportData) => {
    try {
      await createAirport(airportData);
      setOpenAirportForm(false);
      fetchAirports();
    } catch (err) {
      setAirportError("Error adding airport.");
      console.error(err);
    }
  };

  const handleEditAirport = async (airportData) => {
    try {
      await updateAirport(editingAirport.airportId, airportData);
      setOpenAirportForm(false);
      setEditingAirport(null);
      fetchAirports();
    } catch (err) {
      setAirportError("Error updating airport.");
      console.error(err);
    }
  };

  const handleDeleteAirport = async () => {
    try {
      await deleteAirport(selectedAirport.airportId);
      setOpenAirportDelete(false);
      setSelectedAirport(null);
      fetchAirports();
    } catch (err) {
      setAirportError("Error deleting airport.");
      console.error(err);
    }
  };

  return (
    <Box>
      <h2>Flights Management</h2>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
          <Tab label="Flights" />
          <Tab label="Planes" />
          <Tab label="Airports" />
        </Tabs>
      </Box>

      {/* FLIGHTS TAB */}
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <h3>Flights List</h3>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenFlightForm(true)}
          >
            Add New Flight
          </Button>
        </Box>

        {flightError && <Alert severity="error" sx={{ mb: 2 }}>{flightError}</Alert>}
        {flightLoading && <CircularProgress />}

        {!flightLoading && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>Flight #</TableCell>
                  <TableCell>Route</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Seats</TableCell>
                  <TableCell>Prices</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {flights.map((flight) => (
                  <TableRow key={flight.flightsId}>
                    <TableCell>{flight.flightNo}</TableCell>
                    <TableCell>
                      {flight.departureCity} → {flight.arrivalCity}
                    </TableCell>
                    <TableCell>
                      {flight.departureHour} - {flight.arrivalHour}
                    </TableCell>
                    <TableCell>{flight.noOfSeat}</TableCell>
                    <TableCell>
                      <span style={{ fontSize: "0.85rem" }}>
                        ${flight.economicsClassPrice} - ${flight.firstClassSeatPrice}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => setEditingFlight(flight)}
                        sx={{ mr: 1 }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          setSelectedFlight(flight);
                          setOpenFlightDelete(true);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <FlightFormDialog
          open={openFlightForm || editingFlight !== null}
          onClose={() => {
            setOpenFlightForm(false);
            setEditingFlight(null);
          }}
          onSubmit={editingFlight ? handleEditFlight : handleAddFlight}
          initialData={editingFlight}
        />

        <Dialog open={openFlightDelete} onClose={() => setOpenFlightDelete(false)}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete flight {selectedFlight?.flightNumber}?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenFlightDelete(false)}>Cancel</Button>
            <Button onClick={handleDeleteFlight} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>

      {/* PLANES TAB */}
      <TabPanel value={tabValue} index={1}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <h3>Planes List</h3>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenPlaneForm(true)}
          >
            Add New Plane
          </Button>
        </Box>

        {planeError && <Alert severity="error" sx={{ mb: 2 }}>{planeError}</Alert>}
        {planeLoading && <CircularProgress />}

        {!planeLoading && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {planes.map((plane) => (
                  <TableRow key={plane.planeId}>
                    <TableCell>{plane.planeId}</TableCell>
                    <TableCell>{plane.brand}</TableCell>
                    <TableCell>{plane.model}</TableCell>
                    <TableCell>{plane.manufacturingYear}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => setEditingPlane(plane)}
                        sx={{ mr: 1 }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          setSelectedPlane(plane);
                          setOpenPlaneDelete(true);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <PlaneFormDialog
          open={openPlaneForm || editingPlane !== null}
          onClose={() => {
            setOpenPlaneForm(false);
            setEditingPlane(null);
          }}
          onSubmit={editingPlane ? handleEditPlane : handleAddPlane}
          initialData={editingPlane}
        />

        <Dialog open={openPlaneDelete} onClose={() => setOpenPlaneDelete(false)}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete plane {selectedPlane?.brand} {selectedPlane?.model}?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenPlaneDelete(false)}>Cancel</Button>
            <Button onClick={handleDeletePlane} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>

      {/* AIRPORTS TAB */}
      <TabPanel value={tabValue} index={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <h3>Airports List</h3>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenAirportForm(true)}
          >
            Add New Airport
          </Button>
        </Box>

        {airportError && <Alert severity="error" sx={{ mb: 2 }}>{airportError}</Alert>}
        {airportLoading && <CircularProgress />}

        {!airportLoading && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {airports.map((airport) => (
                  <TableRow key={airport.airportId}>
                    <TableCell>{airport.airportId}</TableCell>
                    <TableCell>{airport.name}</TableCell>
                    <TableCell>{airport.code}</TableCell>
                    <TableCell>{airport.city}</TableCell>
                    <TableCell>{airport.country}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => setEditingAirport(airport)}
                        sx={{ mr: 1 }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          setSelectedAirport(airport);
                          setOpenAirportDelete(true);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        <AirportFormDialog
          open={openAirportForm || editingAirport !== null}
          onClose={() => {
            setOpenAirportForm(false);
            setEditingAirport(null);
          }}
          onSubmit={editingAirport ? handleEditAirport : handleAddAirport}
          initialData={editingAirport}
        />

        <Dialog open={openAirportDelete} onClose={() => setOpenAirportDelete(false)}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete airport {selectedAirport?.name}?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenAirportDelete(false)}>Cancel</Button>
            <Button onClick={handleDeleteAirport} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>
    </Box>
  );
}
