import apiClient from "./apiClient";

const ENDPOINT = "/airports";

export const getAirports = () => apiClient.get(ENDPOINT);

export const getAirportById = (id) => apiClient.get(`${ENDPOINT}/${id}`);

export const createAirport = (airport) => apiClient.post(ENDPOINT, airport);

export const updateAirport = (id, airport) => apiClient.put(`${ENDPOINT}/${id}`, airport);

export const deleteAirport = (id) => apiClient.delete(`${ENDPOINT}/${id}`);
