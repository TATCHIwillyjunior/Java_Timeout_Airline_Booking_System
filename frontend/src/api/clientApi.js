import apiClient from "./apiClient";

const ENDPOINT = "/clients";

export const getClients = () => apiClient.get(ENDPOINT);

export const getClientById = (id) => apiClient.get(`${ENDPOINT}/${id}`);

export const createClient = (client) => apiClient.post(ENDPOINT, client);

export const updateClient = (id, client) => apiClient.put(`${ENDPOINT}/${id}`, client);

export const deleteClient = (id) => apiClient.delete(`${ENDPOINT}/${id}`);
