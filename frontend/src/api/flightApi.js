import apiClient from "./apiClient";

const ENDPOINT = "/flights";

export const getFlights = () => apiClient.get(ENDPOINT);

export const getFlightById = (id) => apiClient.get(`${ENDPOINT}/${id}`);

export const searchFlights = (departureCity, arrivalCity, departureDate) =>
  apiClient.get(`${ENDPOINT}/search`, {
    params: {
      departureCity,
      arrivalCity,
      departureDate,
    },
  });

export const createFlight = (flight) => apiClient.post(ENDPOINT, flight);

export const updateFlight = (id, flight) => apiClient.put(`${ENDPOINT}/${id}`, flight);

export const deleteFlight = (id) => apiClient.delete(`${ENDPOINT}/${id}`);
