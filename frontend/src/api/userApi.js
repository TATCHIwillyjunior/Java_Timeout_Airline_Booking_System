import apiClient from "./apiClient";

const ENDPOINT = "/users";

export const getUsers = () => apiClient.get(ENDPOINT);

export const getUserById = (id) => apiClient.get(`${ENDPOINT}/${id}`);

export const createUser = (user) => apiClient.post(ENDPOINT, user);

export const updateUser = (id, user) => apiClient.put(`${ENDPOINT}/${id}`, user);

export const deleteUser = (id) => apiClient.delete(`${ENDPOINT}/${id}`);
