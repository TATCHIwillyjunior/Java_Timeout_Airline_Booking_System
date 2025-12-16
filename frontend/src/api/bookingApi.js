import apiClient from "./apiClient";

const ENDPOINT = "/bookings";

export const getBookings = () => apiClient.get(ENDPOINT);

export const getBookingById = (id) => apiClient.get(`${ENDPOINT}/${id}`);

export const createBooking = (booking) => apiClient.post(ENDPOINT, booking);

export const updateBooking = (id, booking) => apiClient.put(`${ENDPOINT}/${id}`, booking);

export const deleteBooking = (id) => apiClient.delete(`${ENDPOINT}/${id}`);

export const getBookingsByClient = (clientId) => 
  apiClient.get(`${ENDPOINT}/client/${clientId}`);
