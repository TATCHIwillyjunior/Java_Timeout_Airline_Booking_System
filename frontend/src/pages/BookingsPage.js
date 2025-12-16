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
import BookingFormDialog from "../components/BookingFormDialog";
import ClientFormDialog from "../components/ClientFormDialog";
import EmployeeFormDialog from "../components/EmployeeFormDialog";
import {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../api/bookingApi";
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from "../api/clientApi";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../api/employeeApi";

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ width: "100%" }}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function BookingsPage() {
  const [tabValue, setTabValue] = useState(0);

  // Bookings state
  const [bookings, setBookings] = useState([]);
  const [bookingLoading, setBookingLoading] = useState(true);
  const [bookingError, setBookingError] = useState(null);
  const [openBookingForm, setOpenBookingForm] = useState(false);
  const [openBookingDelete, setOpenBookingDelete] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);

  // Clients state
  const [clients, setClients] = useState([]);
  const [clientLoading, setClientLoading] = useState(true);
  const [clientError, setClientError] = useState(null);
  const [openClientForm, setOpenClientForm] = useState(false);
  const [openClientDelete, setOpenClientDelete] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [editingClient, setEditingClient] = useState(null);

  // Employees state
  const [employees, setEmployees] = useState([]);
  const [employeeLoading, setEmployeeLoading] = useState(true);
  const [employeeError, setEmployeeError] = useState(null);
  const [openEmployeeForm, setOpenEmployeeForm] = useState(false);
  const [openEmployeeDelete, setOpenEmployeeDelete] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    // Fetch data on component mount
    fetchBookings();
    fetchClients();
    fetchEmployees();
  }, []);

  useEffect(() => {
    // Re-fetch data when tab changes
    if (tabValue === 0) {
      fetchBookings();
    } else if (tabValue === 1) {
      fetchClients();
    } else if (tabValue === 2) {
      fetchEmployees();
    }
  }, [tabValue]);

  // BOOKINGS MANAGEMENT
  const fetchBookings = async () => {
    setBookingLoading(true);
    setBookingError(null);
    try {
      const response = await getBookings();
      setBookings(response.data);
    } catch (err) {
      setBookingError("Error loading bookings.");
      console.error(err);
    } finally {
      setBookingLoading(false);
    }
  };

  const handleAddBooking = async (bookingData) => {
    try {
      await createBooking(bookingData);
      setOpenBookingForm(false);
      fetchBookings();
    } catch (err) {
      setBookingError("Error adding booking.");
      console.error(err);
    }
  };

  const handleEditBooking = async (bookingData) => {
    try {
      await updateBooking(editingBooking.bookingId, bookingData);
      setOpenBookingForm(false);
      setEditingBooking(null);
      fetchBookings();
    } catch (err) {
      setBookingError("Error updating booking.");
      console.error(err);
    }
  };

  const handleDeleteBooking = async () => {
    try {
      await deleteBooking(selectedBooking.bookingId);
      setOpenBookingDelete(false);
      setSelectedBooking(null);
      fetchBookings();
    } catch (err) {
      setBookingError("Error deleting booking.");
      console.error(err);
    }
  };

  // CLIENTS MANAGEMENT
  const fetchClients = async () => {
    setClientLoading(true);
    setClientError(null);
    try {
      const response = await getClients();
      setClients(response.data);
    } catch (err) {
      setClientError("Error loading clients.");
      console.error(err);
    } finally {
      setClientLoading(false);
    }
  };

  const handleAddClient = async (clientData) => {
    try {
      await createClient(clientData);
      setOpenClientForm(false);
      fetchClients();
    } catch (err) {
      setClientError("Error adding client.");
      console.error(err);
    }
  };

  const handleEditClient = async (clientData) => {
    try {
      await updateClient(editingClient.clientId, clientData);
      setOpenClientForm(false);
      setEditingClient(null);
      fetchClients();
    } catch (err) {
      setClientError("Error updating client.");
      console.error(err);
    }
  };

  const handleDeleteClient = async () => {
    try {
      await deleteClient(selectedClient.clientId);
      setOpenClientDelete(false);
      setSelectedClient(null);
      fetchClients();
    } catch (err) {
      setClientError("Error deleting client.");
      console.error(err);
    }
  };

  // EMPLOYEES MANAGEMENT
  const fetchEmployees = async () => {
    setEmployeeLoading(true);
    setEmployeeError(null);
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (err) {
      setEmployeeError("Error loading employees.");
      console.error(err);
    } finally {
      setEmployeeLoading(false);
    }
  };

  const handleAddEmployee = async (employeeData) => {
    try {
      await createEmployee(employeeData);
      setOpenEmployeeForm(false);
      fetchEmployees();
    } catch (err) {
      setEmployeeError("Error adding employee.");
      console.error(err);
    }
  };

  const handleEditEmployee = async (employeeData) => {
    try {
      await updateEmployee(editingEmployee.employeeId, employeeData);
      setOpenEmployeeForm(false);
      setEditingEmployee(null);
      fetchEmployees();
    } catch (err) {
      setEmployeeError("Error updating employee.");
      console.error(err);
    }
  };

  const handleDeleteEmployee = async () => {
    try {
      await deleteEmployee(selectedEmployee.employeeId);
      setOpenEmployeeDelete(false);
      setSelectedEmployee(null);
      fetchEmployees();
    } catch (err) {
      setEmployeeError("Error deleting employee.");
      console.error(err);
    }
  };

  return (
    <Box>
      <h2>Bookings & People Management</h2>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
          <Tab label="Bookings" />
          <Tab label="Clients" />
          <Tab label="Employees" />
        </Tabs>
      </Box>

      {/* BOOKINGS TAB */}
      <TabPanel value={tabValue} index={0}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <h3>Bookings List</h3>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenBookingForm(true)}
          >
            Add New Booking
          </Button>
        </Box>

        {bookingError && <Alert severity="error" sx={{ mb: 2 }}>{bookingError}</Alert>}
        {bookingLoading && <CircularProgress />}

        {!bookingLoading && (
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>Reservation ID</TableCell>
                  <TableCell>Client</TableCell>
                  <TableCell>Flight</TableCell>
                  <TableCell>Seat Type</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.bookingId}>
                    <TableCell>{booking.bookingId}</TableCell>
                    <TableCell>{booking.client?.user?.firstname} {booking.client?.user?.lastname}</TableCell>
                    <TableCell>{booking.flight?.flightNo}</TableCell>
                    <TableCell>{booking.typeOfSeat}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => setEditingBooking(booking)}
                        sx={{ mr: 1 }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          setSelectedBooking(booking);
                          setOpenBookingDelete(true);
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

        <BookingFormDialog
          open={openBookingForm || editingBooking !== null}
          onClose={() => {
            setOpenBookingForm(false);
            setEditingBooking(null);
          }}
          onSubmit={editingBooking ? handleEditBooking : handleAddBooking}
          initialData={editingBooking}
        />

        <Dialog open={openBookingDelete} onClose={() => setOpenBookingDelete(false)}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete booking {selectedBooking?.bookingId}?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenBookingDelete(false)}>Cancel</Button>
            <Button onClick={handleDeleteBooking} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>

      {/* CLIENTS TAB */}
      <TabPanel value={tabValue} index={1}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <h3>Clients List</h3>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenClientForm(true)}
          >
            Add New Client
          </Button>
        </Box>

        {clientError && <Alert severity="error" sx={{ mb: 2 }}>{clientError}</Alert>}
        {clientLoading && <CircularProgress />}

        {!clientLoading && (
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>Passport #</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.clientId}>
                    <TableCell>{client.passportNo}</TableCell>
                    <TableCell>
                      {client.user?.firstname} {client.user?.lastname}
                    </TableCell>
                    <TableCell>{client.user?.email}</TableCell>
                    <TableCell>{client.user?.phoneNo}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => setEditingClient(client)}
                        sx={{ mr: 1 }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          setSelectedClient(client);
                          setOpenClientDelete(true);
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

        <ClientFormDialog
          open={openClientForm || editingClient !== null}
          onClose={() => {
            setOpenClientForm(false);
            setEditingClient(null);
          }}
          onSubmit={editingClient ? handleEditClient : handleAddClient}
          initialData={editingClient}
        />

        <Dialog open={openClientDelete} onClose={() => setOpenClientDelete(false)}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete client {selectedClient?.user?.firstname}{" "}
            {selectedClient?.user?.lastname}?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenClientDelete(false)}>Cancel</Button>
            <Button onClick={handleDeleteClient} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>

      {/* EMPLOYEES TAB */}
      <TabPanel value={tabValue} index={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <h3>Employees List</h3>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpenEmployeeForm(true)}
          >
            Add New Employee
          </Button>
        </Box>

        {employeeError && <Alert severity="error" sx={{ mb: 2 }}>{employeeError}</Alert>}
        {employeeLoading && <CircularProgress />}

        {!employeeLoading && (
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>Employee #</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Profession</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.employeeId}>
                    <TableCell>{employee.employeeNo}</TableCell>
                    <TableCell>
                      {employee.user?.firstname} {employee.user?.lastname}
                    </TableCell>
                    <TableCell>{employee.user?.email}</TableCell>
                    <TableCell>{employee.profession}</TableCell>
                    <TableCell>{employee.title}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => setEditingEmployee(employee)}
                        sx={{ mr: 1 }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          setSelectedEmployee(employee);
                          setOpenEmployeeDelete(true);
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

        <EmployeeFormDialog
          open={openEmployeeForm || editingEmployee !== null}
          onClose={() => {
            setOpenEmployeeForm(false);
            setEditingEmployee(null);
          }}
          onSubmit={editingEmployee ? handleEditEmployee : handleAddEmployee}
          initialData={editingEmployee}
        />

        <Dialog open={openEmployeeDelete} onClose={() => setOpenEmployeeDelete(false)}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete employee {selectedEmployee?.user?.firstname}{" "}
            {selectedEmployee?.user?.lastname}?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenEmployeeDelete(false)}>Cancel</Button>
            <Button onClick={handleDeleteEmployee} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </TabPanel>
    </Box>
  );
}
