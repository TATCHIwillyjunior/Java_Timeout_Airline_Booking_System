import apiClient from "./apiClient";

const ENDPOINT = "/miles-rewards";

export const getMilesRewards = () => apiClient.get(ENDPOINT);

export const getMilesRewardById = (id) => apiClient.get(`${ENDPOINT}/${id}`);

export const getMilesRewardsByClient = (clientId) =>
  apiClient.get(`${ENDPOINT}/client/${clientId}`);

export const createMilesReward = (milesReward) => apiClient.post(ENDPOINT, milesReward);

export const updateMilesReward = (id, milesReward) => apiClient.put(`${ENDPOINT}/${id}`, milesReward);

export const deleteMilesReward = (id) => apiClient.delete(`${ENDPOINT}/${id}`);
