import axios from "axios";

const BASE_URL = "http://localhost:8080/api/flights";

export const getFlights = () => axios.get(BASE_URL);
export const searchFlights = (departureCity, arrivalCity, departureDate) =>
  axios.get(`${BASE_URL}/search`, {
    params: { departureCity: "Tokyo",
              arrivalCity: "Sydney",
              departureDate: "2025-12-04"  // yyyy-mm-dd
            }
  });
export const createFlight = (flight) => axios.post(BASE_URL, flight);
export const updateFlight = (id, flight) => axios.put(`${BASE_URL}/${id}`, flight);
export const deleteFlight = (id) => axios.delete(`${BASE_URL}/${id}`);
