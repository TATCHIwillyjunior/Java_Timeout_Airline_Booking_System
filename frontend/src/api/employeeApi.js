import apiClient from "./apiClient";

const ENDPOINT = "/employees";

export const getEmployees = () => apiClient.get(ENDPOINT);

export const getEmployeeById = (id) => apiClient.get(`${ENDPOINT}/${id}`);

export const createEmployee = (employee) => apiClient.post(ENDPOINT, employee);

export const updateEmployee = (id, employee) => apiClient.put(`${ENDPOINT}/${id}`, employee);

export const deleteEmployee = (id) => apiClient.delete(`${ENDPOINT}/${id}`);
