import axios from 'axios';
import type { CheckList, Farmer } from '@/services/checklist';

const api = axios.create({
  baseURL: 'http://challenge-front-end.bovcontrol.com',
  timeout: 3000,
});

export const getAllFarms = async (): Promise<CheckList> => {
  const response = await api.get('/v1/checkList');
  return response.data;
};

export const getOneFarmByID = async (id?: string): Promise<Farmer> => {
  const response = await api.get(`/v1/checkList/${id}`);
  return response.data;
};

export const setNewFarm = async (data: Farmer[]): Promise<void> => {
  await api.post('/v1/checkList', { checklists: data });
};

export const deleteFarmByID = async (id: string): Promise<void> => {
  await api.delete(`/v1/checkList/${id}`);
};

export const updateFarmByID = async (
  id: string,
  data: Farmer
): Promise<Farmer> => {
  const response = await api.put(`/v1/checkList/${id}`, data);
  return response.data;
};
