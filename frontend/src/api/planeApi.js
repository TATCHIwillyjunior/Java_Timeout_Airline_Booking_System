import apiClient from "./apiClient";

const ENDPOINT = "/planes";

export const getPlanes = () => apiClient.get(ENDPOINT);

export const getPlaneById = (id) => apiClient.get(`${ENDPOINT}/${id}`);

export const createPlane = (plane) => apiClient.post(ENDPOINT, plane);

export const updatePlane = (id, plane) => apiClient.put(`${ENDPOINT}/${id}`, plane);

export const deletePlane = (id) => apiClient.delete(`${ENDPOINT}/${id}`);
